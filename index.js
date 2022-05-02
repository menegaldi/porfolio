function scrollCarousel(n) {
  const carousel = document.getElementById("carousel");
  carousel.scrollLeft = carousel.scrollLeft + n;
}

function goTo(url) {
  window.location.href = url;
}
