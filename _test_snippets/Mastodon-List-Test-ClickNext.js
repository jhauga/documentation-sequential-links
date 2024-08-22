// Mastodon-List-Test-ClickNext.js
// Scroll "active" link into view, then click next link.

var activePage = document.getElementsByClassName("active")[0];
var nextLink = document.getElementById("nextLink");

// activePage.scrollIntoView();
setTimeout(function() {  
  if (nextLink == undefined) {   
    console.log("**  Manual Click             ********************************************************************");
  } else {
    nextLink.click();
  }
}, 100);