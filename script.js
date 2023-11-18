document.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    var linkHref = event.target.getAttribute('href');

    if (linkHref.trim() === '#') {
      window.location.href = '404.html';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) {
    links[ i ].addEventListener('click', function (event) {
      var href = this.getAttribute('href');

      // Check if the link includes "https:"
      if (href.includes("https:")) {
        // If link includes "https:", continue with the normal link behavior
        return;
      }

      // Check if the file exists, you may need to adjust the path based on your file structure
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', href, true);
      xhr.onload = function () {
        if (xhr.status == 404) {
          // File not found, redirect to 404.html
          window.location.href = '404.html';
        } else {
          // File found, continue with the normal link behavior
          window.location.href = href;
        }
      };
      xhr.send();

      event.preventDefault(); // Prevent the default link behavior while checking for file existence
    });
  }
});

window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Get 30% of the document's height
  const scrollThreshold = 0.2 * document.documentElement.scrollHeight;

  // Show/hide the button based on scroll position
  const toTopButton = document.querySelector('.to-top');
  if (scrollPosition > scrollThreshold) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
});
