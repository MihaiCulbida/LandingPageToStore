  const content = {
    imagesDown: [
      "images/img1.png",
      "images/img2.png",
      "images/img3.png",
      "images/img4.png",
      "images/img5.png",
      "images/img6.png",
      "images/img7.png",
      "images/img8.png",
    ],
    imagesUp: [
      "images/img2.png",
      "images/img1.png",
      "images/img8.png",
      "images/img7.png",
      "images/img6.png",
      "images/img5.png",
      "images/img4.png",
      "images/img3.png",
    ],
    button: `
      <button class="cssbuttons-io-button" data-href="shop.html">
        Start for free
        <div class="icon">
          <svg height="24" width="24" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12
                 l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor">
            </path>
          </svg>
        </div>
      </button>
    `
  };

  document.getElementById("down").innerHTML =
    content.imagesDown.map(src => `<img src="${src}">`).join("");

  document.getElementById("up").innerHTML =
    content.imagesUp.map(src => `<img src="${src}">`).join("");

  document.getElementById("button-container").innerHTML = content.button;