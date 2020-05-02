import { highlight, registerLanguage } from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import shell from "highlight.js/lib/languages/shell";
import "highlight.js/styles/solarized-light.css";
import { Marked } from "marked-ts";
import * as React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

registerLanguage("python", python);
registerLanguage("javascript", javascript);
registerLanguage("shell", shell);

interface IPost {
  body: string;
  summary: string;
  title: string;
}

interface IParams {
  id: string;
}

const Post = () => {
  const params = useParams<IParams>();
  const id = params.id;

  Marked.setOptions({
    highlight: (code, lang) => highlight(lang || "", code).value,
  });
  const [post, setPost] = React.useState<IPost | undefined>();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/v0/blogs/${id}/`);
      const data = await response.json();

      setPost(data);
    };
    fetchData();
  }, []);

  const body = post ? (
    <div
      className="blog-post-body"
      dangerouslySetInnerHTML={{ __html: Marked.parse(post.body) }}
    />
  ) : (
    <div className="skeleton skeleton-line" />
  );

  return (
    <>
      <Helmet>
        <title>{`${post && post.title} PGJones`}</title>
        <meta name="title" content={post && post.title} />
        <meta name="description" content={post && post.summary} />
        <meta name="url" content={window.location.href} />
        <meta name="site_name" content="PGJones.dev" />
        <meta name="type" content="article" />
        <meta name="locale" content="en_GB" />

        <meta property="og:title" content={post && post.title} />
        <meta property="og:description" content={post && post.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:article:tag" content="Programming" />
      </Helmet>

      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container single-col-max-width">
          <div className="blog-post-body">{body}</div>
        </div>
      </article>
    </>
  );
};

export default Post;
