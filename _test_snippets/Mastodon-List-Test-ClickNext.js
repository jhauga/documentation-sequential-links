// Mastodon-List-Test-ClickNext.js
// Scroll "active" link into view, then click next link.

var activePage = document.getElementsByClassName("active")[0];

activePage.scrollIntoView();
setTimeout(function() {
    nextLink.click();
}, 100);
