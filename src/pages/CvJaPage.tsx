import { PageMeta } from "../components/PageMeta";
import { ReactEmbedGist } from "../components/ReactEmbedGist";

export function CvJaPage() {
  return (
    <>
      <PageMeta subtitle="CV - ja" />
      <ReactEmbedGist gist="krrrr38/f4620b691e322223c7e84a1b3c497773" file="CV_ja.md" />
    </>
  );
}
