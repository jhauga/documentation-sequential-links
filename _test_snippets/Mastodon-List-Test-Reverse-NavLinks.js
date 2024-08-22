// Mastodon-List-Test-Reverse-NavLinks.js
// Output the href value from navbar in reverse sequential order.

var text = "Navigated to ";
var midMenuManualClick = "http://localhost:1313/methods/admin/";
var selectSidebar = document.getElementsByTagName("nav")[0];
var navUL = selectSidebar.getElementsByTagName("ul")[0];
var navLI = navUL.getElementsByTagName("li");
var navLILen = navLI.length;
// Extract links.
for (i = Number(navLILen-1); i >= 0; i--) {
  let navLIATag = navLI[i].getElementsByTagName("a");
  let parEl = navLI[i].parentElement;
  if (parEl.className != "") {
    console.log(text + navLIATag[0].href);
    let prevLITag = navLI[i].previousElementSibling;
    let parElPrevSibling = navLI[i].parentElement;
    if (
       ((prevLITag == null || prevLITag == undefined) &&
         parElPrevSibling.previousElementSibling.className == "sub-title") ||
         navLIATag[0].href == midMenuManualClick) {
      console.log("**  Manual Click             ********************************************************************");
    } 
  }
}