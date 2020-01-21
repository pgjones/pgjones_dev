import { faRssSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";

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

      setPosts(
        data.posts.sort(
          (a: IPost, b: IPost) => +new Date(b.date) - +new Date(a.date),
        ),
      );
    };
    fetchData();
  }, []);

  let cards = [
    <div className="col-md-6 mb-3" key="1">
      <div className="card blog-post-card">
        <div className="card-body">
          <h5 className="card-title">
            <div className="skeleton skeleton-line" />
          </h5>
          <p className="card-text">
            <div className="skeleton skeleton-line" />
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <div className="skeleton skeleton-line" />
          </small>
        </div>
      </div>
    </div>,
  ];

  if (posts.length > 0) {
    cards = posts.map(post => (
      <div className="col-md-6 mb-3" key={post.id}>
        <div className="card blog-post-card">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/blog/${post.id}/`} className="theme-link">
                {post.title}
              </Link>
            </h5>
            <p className="card-text">{post.summary}</p>
            <p className="mb-0">
              <Link to={`/blog/${post.id}/`} className="more-link">
                Read more →
              </Link>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{post.date}</small>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center">
          <h2 className="heading">A Blog About Software Development</h2>
          <div className="intro mb-4">Welcome to my blog.</div>
          <a
            href="https://pgjones.dev/blog/atom.xml"
            type="submit"
            className="btn btn-primary mr-2"
          >
            <FontAwesomeIcon className="mr-2" icon={faRssSquare} />
            Atom Feed
          </a>
          <a
            href="https://pgjones.dev/blog/rss20.xml"
            type="submit"
            className="btn btn-primary"
          >
            <FontAwesomeIcon className="mr-2" icon={faRssSquare} />
            RSS Feed
          </a>
        </div>
      </section>

      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="row">
            {cards}

            <div className="col-md-6 mb-3">
              <div className="card blog-post-card">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      className="theme-link"
                      href="https://medium.com/@pgjones"
                    >
                      Medium blog
                    </a>
                  </h5>
                  <p className="card-text">
                    Before I made this site I blogged on medium.com under the
                    handle @pgjones. I still do for articles that are related to
                    my employment.
                  </p>
                  <p className="mb-0">
                    <a className="more-link" href="https://medium.com/@pgjones">
                      Read more →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card blog-post-card">
                <div className="card-body">
                  <h5 className="card-title">
                    <a className="theme-link" href="https://stet.io/blog">
                      Stet.io blog
                    </a>
                  </h5>
                  <p className="card-text">
                    Stet.io is an online image editor I developed, it also had a
                    blog about it and image processing techniques.
                  </p>
                  <p className="mb-0">
                    <a className="more-link" href="https://stet.io/blog">
                      Read more →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
