import "./PropsChallenge.css"


export default function PropsChallenge() {
  const post = [
    { id: 1, title: "title 1", content: "ccccc" },
    { id: 2, title: "title 2", content: "ccccc" },
    { id: 3, title: "title 3", content: "ccccc" },
    { id: 4, title: "title 4", content: "ccccc" },
    { id: 5, title: "title 5", content: "ccccc" },
  ];
  const btns = [
    {
      id: 1,
      content: "manny heffley",
      children: (
        <img
          src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
          alt=""
          style={{ width: "75px", aspectRatio: "4/3" }}
        />
      ),
    },
    { id: 2, content: "manny dump", children: null },
    {
      id: 3,
      content: "manny crocodile",
      children: (
        <img
          src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          style={{ width: "75px", aspectRatio: "auto" }}
        />
      ),
    },
  ];
  const btnList = btns.map((ele) => {
    return (
      <Btn key={ele.id} title={ele.content}>
        {ele.children}
      </Btn>
    );
  });
  const postList = post.map((ele) => {
    return <Post key={ele.id} title={ele.title} content={ele.content}></Post>;
  });
  return (
    <>
      <h1 className="header">Tarmeez Academy</h1>
      <div className="container">
        <main className="posts">{postList}</main>
        <aside className="btns">
          {/* <Btn title={"do not click me"}></Btn>
          <Btn title={"الاكثر قراءة"}>
            <img
              src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
              alt=""
              style={{ width: "75px", aspectRatio: "4/3" }}
            />
          </Btn>
          <Btn title={"الاكثر قراءة"}>
            <img
              src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "75px", aspectRatio: "auto" }}
            />
          </Btn> */}
          {btnList}
        </aside>
      </div>
    </>
  );
}

function Post({ title, content }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <hr />
      <p>{content}</p>
    </div>
  );
}

function Btn({ title, children }) {
  return title ? (
    <button>
      <p>{title}</p>
      {children}
    </button>
  ) : null;
}
