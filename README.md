# documentation-sequential-links
For [Mastodon Documentation](https://github.com/mastodon/documentation) pull request 
[#1395](https://github.com/mastodon/documentation/pull/1395). 

This repo is meant to serve as a working example, and show test results.
All test files are in the `/_test_*` folders.

_Ctrl + Click_ Below for Demo Video (_hosted outside gitHub_):

[![Example Video](https://practicing.xyz/gitHub/Process/ExampleVideos/documentation-sequential-links/videoImg.jpg)](https://practicing.xyz/gitHub/Process/ExampleVideos/documentation-sequential-links/Example.webm)

## INSTRUCTIONS - To Preview Pull Request Results
To get a preview of the site built with 
https://github.com/mastodon/documentation/pull/1395 
please follow these steps:
 1. Open repo in "Codespaces"
 2. Start a simple localhost in terminal.
    - For example - enter or copy/paste: 
    
    ``` 
    php -S localhost:1313
    ```
    
 3. When GitHub prompts click link to open site.


## TESTING - Procedure to Test Output
Testing was done in the browser using snippets in "devTool". There were 4 snippets, which:

  1. Clicked next
  2. Sequentially output navbar links
  3. Clicked previous
  4. Reversely output navbar links

To expand on this; after starting the development server the snippets were used to test that
the sequential links were correct. The procedure went as such:

1. Either starting at the first \(<em>excluding home page</em>\) or last page of the site 
   the `Mastodon-List-Test-Click[PAGE]` snippet was selected, then well - click click 
   click\(<em>ing</em>\); was done:

   ![list of browser snippets](/_test_img/browser_snippets.jpg)
   
   ![click to run snippet](/_test_img/running_snippet.jpg)
   
<details>

<br><br>

<summary>Click to View Snippet Code:</summary>

<strong>Mastodon-List-Test-ClickNext</strong>
<details>
<summary>Click to Expand</summary>

Duplicated file [/_test_snippets/Mastodon-List-Test-ClickNext.js](/_test_snippets/Mastodon-List-Test-ClickNext.js)

```
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

```
</details>

<strong>Mastodon-List-Test-ClickPrev</strong>
<details>
<summary>Click to Expand</summary>

Duplicated file [/_test_snippets/Mastodon-List-Test-ClickPrev.js](/_test_snippets/Mastodon-List-Test-ClickPrev.js)

```
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

```
</details>

<strong>Mastodon-List-Test-NavLinks</strong>
<details>
<summary>Click to Expand</summary>

Duplicated file [/_test_snippets/Mastodon-List-Test-NavLinks.js](/_test_snippets/Mastodon-List-Test-NavLinks.js)

```
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

```
</details>

<strong>Mastodon-List-Test-Reverse-NavLinks</strong>
<details>
<summary>Click to Expand</summary>

Duplicated file [/_test_snippets/Mastodon-List-Test-Reverse-NavLinks.js](/_test_snippets/Mastodon-List-Test-Reverse-NavLinks.js)

```
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

```
</details>     

<br><br>

</details>

<strong>NOTE</strong> - when the links reached the end of a section, or a manual click
had to be done, an alert line was logged to the console. Below is a rendering of where
this might occur.
  
![example of end of section](/_test_img/screen_for_manual_click.jpg)
  
2. To get the list of the links in sequential or reverse order the snippet 
   `Mastodon-List-Test-[Reverse]-NavLinks` was selected and run.
 
3. In both of the above cases the output from the console was saved to a log file.

   ![save logged console](/_test_img/save_console.jpg)
   
4. The console log files were cleaned using `/_test_logs/cleanClickTest.sh`. The log files 
   were cleaned a bit using regular expressions such as 
   `^Mastodon-List-Test-([A-Za-z]+):(([0-9]+)|([0-9]+ [0-9]+))` to remove unwanted ouput 
   from the console, but examples of what the original saved files genereated are in the 
   `/_test_logs/_ORIGINAL*.log` files. The `/_test_logs/Browser_snippet_Test-*` files 
   are the cleaned results.
   
5. Using the command line, the files were compared with:
   
   `diff --side-by-side "Browser_snippet*-Output-*.log" "Browser_snippet*-Test-*.log > DIFF_*.txt`
   
   This was done for each case \(<em>ordered or reverse</em>\) of the links. All of these test files 
   are in the `/_test_logs` folder.
   
## RESULTS
One page within menu had to be manually clicked:  <br>

- API METHODS - admin -\> ` http://localhost:1313/methods/admin/ `

In the test scripts `Mastodon-List-Test-Reverse-NavLinks.js` and `Mastodon-List-Test-NavLinks.js`
this was accounted for. The was nested in `content/methods/admin`, was generated with 
`layouts/default/list.html`, which did not need to have sequential navigation. 


After accounting for mid-menu manual click; both the ordered and reverse tests produced same 
results. Excluding manual clicks that had to be done at the start and end of each section, 
and the page `/methods/admin/`; all links were correct.

<strong>NOTE</strong> - to view were manual clicks occurred look out for:

`**  Manual Click             ********************************`

in `/_test_logs/DIFF_*.txt` files.
    
