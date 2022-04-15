let images = ["cspresent.jpg", "cspresent2.jpeg", "cspresent3.jpeg", "mrdsax.jpg", "jazz.jpg","piano1.jpg", "piano2.jpg", "ptech.jpg", "ptech2.jpeg", "build.jpg", "c4k.jpg"];

(() => {
  document.getElementById("main-bg").style =
    `background-image: url('https://doongs.github.io/img/${images[Math.floor(Math.random() * images.length)]}'); height: 100vh`;
})();
