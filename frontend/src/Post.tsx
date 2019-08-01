import { highlight, registerLanguage } from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/solarized-light.css";
import { Marked } from "marked-ts";
import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Card from "./Card";
import { ColumnContainer } from "./Containers";
import { SSkeletonLine } from "./Skeleton";

registerLanguage("python", python);
registerLanguage("javascript", javascript);

const SDiv = styled.div`
  & pre {
    background-color: ${props => props.theme.color.grey.light};
    overflow-x: scroll;
    padding: 1rem;
  }

  & p code {
    color: ${props => props.theme.color.secondary.dark};
  }
`;

interface IPost {
  body: string;
  summary: string;
  title: string;
}

interface IMatch {
  params: {
    id: string;
  };
}

interface IProps {
  match: IMatch;
}

const Post = ({ match }: IProps) => {
  Marked.setOptions({
    highlight: (code, lang) => highlight(lang || "", code).value,
  });
  const [post, setPost] = React.useState<IPost | undefined>();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/v0/blogs/${match.params.id}/`);
      const data = await response.json();

      setPost(data);
    };
    fetchData();
  }, []);

  const body = post ? (
    <SDiv dangerouslySetInnerHTML={{ __html: Marked.parse(post.body) }} />
  ) : (
    <SSkeletonLine />
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
      <ColumnContainer>
        <Card body={body} />
      </ColumnContainer>
    </>
  );
};

export default Post;
