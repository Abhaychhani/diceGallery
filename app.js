window.addEventListener("load", () => {
  const dice = document.querySelector(".dice");
  const loader = document.getElementById("loader");
  const imageUrls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  let loadedImages = 0;

  function loadImages() {
    imageUrls.forEach((url) => {
      const image = new Image();
      image.src = `./img/${url}`;
      image.onload = () => {
        loadedImages++;
        if (loadedImages === imageUrls.length) {
          loader.classList.add("hidden");
          dice.classList.remove("hidden");
        }
      };
    });
  }
  setTimeout(loadImages,1500)
  // loadImages();
});
