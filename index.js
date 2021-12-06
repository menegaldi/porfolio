function scrollRight() {
  const carousel = document.getElementById("carousel");
  carousel.scrollLeft = carousel.scrollLeft + 100;
}

function goTo(url) {
  window.location.href = url;
}
