import "./styles.css";
import { useState, useEffect } from "react";

export default function Meme() {
  const [memeInfo, setMemeInfo] = useState({
    upperText: "",
    lowerText: "",
    img: "",
  });
  const [memesObj, setMemesObj] = useState({})

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((data) => {
        setMemesObj(data)
        let i = Math.floor(Math.random() * 100);
        setMemeInfo({ ...memeInfo, img: data.data.memes[i].url });
      });
  }, []);
  function handleGenBtn() {
      let i = Math.floor(Math.random() * 100);
      setMemeInfo({ ...memeInfo, img: memesObj.data.memes[i].url });
  }

  return (
    <main>
      <div className="container">
        <h3>
          Generate an image from the button bellow then type upper text and the
          lower text
        </h3>
        <div className="inputs">
          <div>
            <label htmlFor="upperText">Upper text </label>
            <input
              type="text"
              id="upperText"
              value={memeInfo.upperText}
              onChange={(e) => {
                setMemeInfo({ ...memeInfo, upperText: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="lowerText">Lower text </label>
            <input
              type="text"
              id="lowerText"
              value={memeInfo.lowerText}
              onChange={(e) => {
                setMemeInfo({ ...memeInfo, lowerText: e.target.value });
              }}
            />
          </div>
          <button onClick={handleGenBtn}>Generate Img</button>
        </div>
        <div className="resault">
          <p className="uppertext">{memeInfo.upperText}</p>
          <p className="lowertext">{memeInfo.lowerText}</p>
          <img src="" alt="" srcSet={memeInfo.img} />
        </div>
      </div>
    </main>
  );
}
