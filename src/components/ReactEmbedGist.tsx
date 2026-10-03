import { Component, type ReactNode } from "react";

type GistPayload = {
  error?: string;
  div: string;
  stylesheet: string;
};

type ReactEmbedGistProps = {
  gist: string;
  file?: string;
  loadingClass?: string;
  wrapperClass?: string;
  contentClass?: string;
  errorClass?: string;
  loadingFallback?: ReactNode;
};

type ReactEmbedGistState = {
  loading: boolean;
  content: string;
  error?: string | null;
};

export class ReactEmbedGist extends Component<ReactEmbedGistProps, ReactEmbedGistState> {
  state: ReactEmbedGistState = {
    loading: true,
    content: "",
  };

  componentDidMount() {
    this.getGist();
  }

  componentDidUpdate(prevProps: ReactEmbedGistProps) {
    if (prevProps.gist !== this.props.gist) {
      this.getGist();
    }
  }

  getGist() {
    const { gist, file } = this.props;
    const id = gist.split("/")[1];

    if (!id) {
      this.setState({
        loading: false,
        error: `${gist} is not valid format`,
      });
      return;
    }

    this.setState({ loading: true });
    this.setupCallback(id);

    const script = document.createElement("script");
    let url = `https://gist.github.com/${gist}.json?callback=gist_callback_${id}`;
    if (file) {
      url += `&file=${file}`;
    }
    script.type = "text/javascript";
    script.src = url;
    script.onerror = () => this.handleNetworkErrors();
    document.head.appendChild(script);
  }

  handleNetworkErrors() {
    this.setState({
      loading: false,
      error: `${this.props.gist} failed to load`,
    });
  }

  setupCallback(id: string) {
    window[`gist_callback_${id}`] = (gist: GistPayload) => {
      const nextState: ReactEmbedGistState = {
        loading: false,
        error: gist.error || null,
        content: "",
      };

      if (!nextState.error) {
        nextState.content = `${gist.div.replace(/href=/g, 'target="_blank" href=')}`;
      }

      this.setState(nextState);

      if (!document.head.innerHTML.includes(gist.stylesheet)) {
        const stylesheet = document.createElement("link");
        stylesheet.type = "text/css";
        stylesheet.rel = "stylesheet";
        stylesheet.href = gist.stylesheet;
        document.head.appendChild(stylesheet);
      }
    };
  }

  render() {
    const { loadingClass, wrapperClass, contentClass, errorClass, loadingFallback } = this.props;

    if (this.state.loading) {
      return (
        <article className={loadingClass}>
          {loadingFallback ? loadingFallback : "Loading ..."}
        </article>
      );
    }
    if (this.state.error) {
      return <article className={errorClass}>{this.state.error}</article>;
    }
    return (
      <article className={wrapperClass}>
        <section
          className={contentClass}
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
      </article>
    );
  }
}
