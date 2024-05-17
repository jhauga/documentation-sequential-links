// Mastodon-List-Test-NavLinks.js
// Output the href value from navbar in sequential order.

/**************************************************************
 selectSidebar defined in script tag parsed 
 in partial "list.html". Below is how
 variable was defined:
 
 // Start process to select sidebar and ensure correct selection.
 var selectNavs = document.getElementsByTagName("nav");
 var selectSidebar;
 for (i = 0; i < selectNavs.length; i++) {
   if (selectNavs[i].className == "sidebar") {
     selectSidebar = selectNavs[i]; // got it
   }
 } 
 
*************************************************************/

var navUL = selectSidebar.getElementsByTagName("ul")[0];
var navULATag = navUL.getElementsByTagName("a");
var navULATagLen = navULATag.length;
var text = "Navigated to ";

for (i = 1; i < navULATagLen; i++) {
    console.log(text + navULATag[i].href);
}