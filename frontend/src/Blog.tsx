import * as React from "react";
import styled from "styled-components";

import Card from "./Card";
import { ColumnContainer } from "./Containers";
import { SSkeletonLine } from "./Skeleton";
import { SLink } from "./Typography";

const SH3 = styled.h3`
  margin-bottom: 0;
`;

interface IPost {
  date: string;
  id: string;
  summary: string;
  title: string;
}

const Blog = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/v0/blogs/");
      const data = await response.json();

      setPosts(data.posts);
    };
    fetchData();
  }, []);

  let cards = [
    <Card
      key={-1}
      header={<SSkeletonLine />}
      body={<SSkeletonLine />}
      footer={<SSkeletonLine />}
    />,
  ];
  if (posts.length > 0) {
    cards = posts.map(post => (
      <Card
        header={
          <SH3>
            {post.title}
            <br />
            <small>{post.date}</small>
          </SH3>
        }
        body={post.summary}
        footer={<SLink to={`/blog/${post.id}/`}>Read more</SLink>}
      />
    ));
  }
  return <ColumnContainer>{cards}</ColumnContainer>;
};

export default Blog;
