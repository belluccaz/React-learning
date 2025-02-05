import React from "react";
import ReactDOM from "react-dom";

const randomImg = "https://picsum.photos/200";
const img =
  "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/12/01174547/Matrix-Resurrections-imagem-promocional.jpg";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Movies
    </h1>
    <div>
      <img src={randomImg + "?grayscale"} alt="random image" />
      <img className="movie-img" src={img} alt="The Matrix Image" /> <br />
      <img
        className="movie-img"
        src="https://i0.wp.com/poltronanerd.com.br/wp-content/uploads/2023/05/oppenheimer_ver3_xxlg.jpg?fit=1483%2C834&ssl=1"
        alt="Oppenheimer Image"
      />{" "}
      <br />
      <img
        className="movie-img"
        src="https://c4.wallpaperflare.com/wallpaper/551/481/157/matthew-mcconaughey-in-interstellar-wallpaper-preview.jpg"
        alt="Interestellar Image"
      />
    </div>
  </div>,
  document.getElementById("root")
);
