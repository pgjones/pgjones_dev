import * as React from "react";
import { Helmet } from "react-helmet";

interface IMessage {
  name: string;
  post: string;
}

const Chat = () => {
  const [ready, setReady] = React.useState(false);
  const [name, setName] = React.useState("");
  const [post, setPost] = React.useState("");
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [websocket, setWebsocket] = React.useState<WebSocket | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const scheme = location.protocol === "http:" ? "ws" : "wss";
    const connection = new WebSocket(`${scheme}://${location.host}/v0/chat/`);
    connection.onmessage = (message) => {
      setMessages((current) => [JSON.parse(message.data), ...current]);
    };
    connection.onopen = () => {
      setReady(true);
    };
    connection.onclose = () => {
      setReady(false);
    };
    setWebsocket(connection);
    return () => {
      connection.close();
    };
  }, [setMessages, setReady, setWebsocket]);

  const displayedMessages = messages.map((message: IMessage, index: number) => (
    <li key={index} className="list-group-item">
      <h5 className="mb-1">{message.name}</h5>
      <br />
      <p>{message.post}</p>
    </li>
  ));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (websocket) {
      websocket.send(JSON.stringify({ name, post }));
    }
  };

  return (
    <>
      <Helmet>
        <title>Broadcast chat engine | PGJones</title>
        <meta name="description" content="Simple broadcast chat, using Trio." />
      </Helmet>
      <section className="about-me-section p-3 p-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser media flex-column flex-lg-row">
            <div className="media-body">
              <h2 className="name font-weight-bold mb-1">Chat</h2>
              <div className="tagline mb-3">
                {ready ? "Connected" : "Connecting"}
              </div>
              <p className="small">
                Broadcast chat messages to everyone connected to this page. This
                is a test for a London Python talk.
              </p>
              <form
                className="contact-form col-lg-8 mx-lg-auto"
                onSubmit={onSubmit}
              >
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      minLength={2}
                      required={true}
                      value={name}
                      onChange={(event: React.FormEvent<HTMLInputElement>) =>
                        setName(event.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      className="form-control"
                      placeholder="Enter your message"
                      rows={5}
                      required={true}
                      value={post}
                      onChange={(event: React.FormEvent<HTMLTextAreaElement>) =>
                        setPost(event.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="form-group col-12">
                    <button
                      disabled={!ready}
                      type="submit"
                      className="btn btn-block btn-primary py-2"
                    >
                      Send Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="overview-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-3">Messages</h2>
          <ul className="list-group">{displayedMessages}</ul>
        </div>
      </section>
    </>
  );
};

export default Chat;
