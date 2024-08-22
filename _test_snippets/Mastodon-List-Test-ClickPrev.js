// Mastodon-List-Test-ClickPrev.js
// Scroll "active" link into view, then click previous link.

var activePage = document.getElementsByClassName("active")[0];
var previousLink = document.getElementById("previousLink");

// activePage.scrollIntoView();
setTimeout(function() {  
  if (previousLink == undefined) {   
    console.log("**  Manual Click             ********************************************************************");
  } else {
    previousLink.click();
  }
}, 100);