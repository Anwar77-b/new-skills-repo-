export default function ComponentChallege() {
  return (
    <div className="container">
      <Header />
      <div>
        <Main />
        <Aside />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header style={{ backgroundColor: "green" }}>
      <h1
        style={{
          color: "#fff",
          margin: "0",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        Component Challenge
      </h1>
    </header>
  );
}

function Main() {
  function Post() {
    return (
      <div className="post">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p></p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          sequi reprehenderit saepe dolores quia itaque.
        </p>
      </div>
    );
  }
  return (
    <main>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
}

function Aside() {
  function Btn() {
    const sstyle = {
        backgroundColor: "violet",
        color: "#fff",
        padding: "0.5rem 0.75rem",
            cursor: "pointer"
    }
    return (<button style={{...sstyle}}>click me</button>)
  }
  return (
    <section>
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
    </section>
  );
}
