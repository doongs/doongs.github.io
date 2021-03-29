let images = ["cspresent.jpg", "cspresent2.jpeg", "cspresent3.jpeg"];

(() => {
  var item = images[Math.floor(Math.random() * images.length)];
  document.getElementById("main-bg").style =
    `background-image: url('https://doongs.github.io/img/${item}'); height: 100vh`;
})();
