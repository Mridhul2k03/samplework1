document.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.navbar').contains(event.target);
    var navbarCollapse = document.querySelector('.navbar-collapse');

    if (!isClickInside && navbarCollapse.classList.contains('show')) {
      var collapseElement = new bootstrap.Collapse(navbarCollapse);
      collapseElement.hide();
    }
  });