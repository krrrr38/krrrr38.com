import { useEffect, useState } from "react"; // we need this to make JSX compile

type BlogProps = {
  rss: string;
};

type Blog = {
  title: string;
  link: string;
  posts: BlogPost[];
};

type BlogPost = {
  date: string;
  title: string;
  link: string;
};

export const Blog = ({ rss }: BlogProps) => {
  const [blog, setBlog] = useState<Blog | undefined>(undefined);
  const formatPubDate = (d: Date) => {
    const year = d.getFullYear().toString().padStart(4, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    const hour = d.getHours().toString().padStart(2, "0");
    const minute = d.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  useEffect(() => {
    fetch(rss)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        const blogTitle =
          data.querySelector("rss channel title")?.textContent ?? "";
        const blogLink =
          data.querySelector("rss channel link")?.textContent ?? "";
        const blogPosts = Array.from(data.querySelectorAll("item"))
          .map((el) => {
            const postTitle = el.querySelector("title")?.textContent ?? "";
            const postLink = el.querySelector("link")?.textContent ?? "";
            const pubDate = formatPubDate(
              new Date(el.querySelector("pubDate")?.textContent ?? "")
            );
            return {
              date: pubDate,
              title: postTitle,
              link: postLink,
            };
          })
          .slice(0, 12);
        setBlog({
          title: blogTitle,
          link: blogLink,
          posts: blogPosts,
        });
      });
  }, [rss]);

  if (blog === undefined) {
    return (
      <section>
        <h2>Blog</h2>
        <div>Loading ...</div>
      </section>
    );
  }

  return (
    <section>
      <h2>Blog</h2>
      <a href={blog.link} target={"_blank"}>
        {blog.title}
      </a>
      <ul style={{ margin: "0 25px" }}>
        {blog.posts.map((post) => (
          <li key={post.link}>
            <a href={post.link} target={"_blank"}>
              {post.date}: {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
