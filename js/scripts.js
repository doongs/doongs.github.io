let images = ["cspresent.jpg", "cspresent2.jpeg", "cspresent3.jpeg", "mrdsax.jpg", "jazz.jpg","piano1.jpg"];

(() => {
  document.getElementById("main-bg").style =
    `background-image: url('https://doongs.github.io/img/${images[Math.floor(Math.random() * images.length)]}'); height: 100vh`;
})();
