import { highlight } from "highlight.js";
import { Marked } from "marked-ts";
import * as React from "react";
import styled from "styled-components";

import Card from "./Card";
import { ColumnContainer } from "./Containers";
import { SSkeletonLine } from "./Skeleton";

const SDiv = styled.div`
  & pre {
    background-color: ${props => props.theme.color.grey.light};
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
