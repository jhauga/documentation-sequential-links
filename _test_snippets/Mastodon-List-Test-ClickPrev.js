// Mastodon-List-Test-ClickPrev.js
// Scroll "active" link into view, then click previous link.

var activePage = document.getElementsByClassName("active")[0];

activePage.scrollIntoView();
setTimeout(function() {
    previousLink.click();
}, 100);
