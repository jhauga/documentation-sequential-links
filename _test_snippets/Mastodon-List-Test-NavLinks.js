// Mastodon-List-Test-NavLinks.js
// Output the href value from navbar in sequential order.

var text = "Navigated to ";
var midMenuManualClick = "http://localhost:1313/methods/admin/";
var selectSidebar = document.getElementsByTagName("nav")[0];
var navUL = selectSidebar.getElementsByTagName("ul")[0];
var navLI = navUL.getElementsByTagName("li");
var navLILen = navLI.length;
// Extract links.
for (i = 0; i < navLILen; i++) {
  let navLIATag = navLI[i].getElementsByTagName("a");
  let parEl = navLI[i].parentElement;
  if (parEl.className != "") {
    console.log(text + navLIATag[0].href);
    let nextLITag = navLI[i].nextElementSibling;
    let parElPrevSibling = navLI[i].parentElement;
    if (
       ((nextLITag == null || nextLITag == undefined) &&
         parElPrevSibling.previousElementSibling.className == "sub-title") || 
         navLIATag[0].href == midMenuManualClick) {
      console.log("**  Manual Click             ********************************************************************");
    } 
  }
}