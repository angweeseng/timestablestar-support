/* Shared by every page. The header's edge appears only once content is actually under it.
   Set straight from the scroll event: reading scrollY and toggling a class that has not changed
   costs nothing, and it keeps working where a browser throttles animation frames. */
(function () {
  var top = document.querySelector('.top');
  if (!top) return;
  function edge() { top.classList.toggle('scrolled', window.scrollY > 4); }
  window.addEventListener('scroll', edge, { passive: true });
  edge();
})();
