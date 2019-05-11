import { highlight, registerLanguage } from "highlight.js/lib/highlight";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/solarized-light.css";
import { Marked } from "marked-ts";
import * as React from "react";
import styled from "styled-components";

import Card from "./Card";
import { ColumnContainer } from "./Containers";
import { SSkeletonLine } from "./Skeleton";

registerLanguage("python", python);

const SDiv = styled.div`
  & pre {
    background-color: ${props => props.theme.color.grey.light};
    overflow-x: scroll;
  }
`;

interface IPost {
  body: string;
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
    <ColumnContainer>
      <Card body={body} />
    </ColumnContainer>
  );
};

export default Post;
