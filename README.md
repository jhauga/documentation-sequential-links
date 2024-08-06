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
    php -S localhost:8000 
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
var activePage = document.getElementsByClassName("active")[0];

activePage.scrollIntoView();
setTimeout(function() {
nextLink.click();
}, 100);
```
</details>

<strong>Mastodon-List-Test-ClickPrev</strong>
<details>
<summary>Click to Expand</summary>

Duplicated file [/_test_snippets/Mastodon-List-Test-ClickPrev.js](/_test_snippets/Mastodon-List-Test-ClickPrev.js)

```
var activePage = document.getElementsByClassName("active")[0];

activePage.scrollIntoView();
setTimeout(function() {
previousLink.click();
}, 100);

```
</details>

<strong>Mastodon-List-Test-NavLinks</strong>
<details>
<summary>Click to Expand</summary>

Duplicated file [/_test_snippets/Mastodon-List-Test-NavLinks.js](/_test_snippets/Mastodon-List-Test-NavLinks.js)

```
var navUL = selectSidebar.getElementsByTagName("ul")[0];
var navULATag = navUL.getElementsByTagName("a");
var navULATagLen = navULATag.length;
var text = "Navigated to ";

for (i = 1; i < navULATagLen; i++) {
console.log(text + navULATag[i].href);
}
```
</details>

<strong>Mastodon-List-Test-Reverse-NavLinks</strong>
<details>
<summary>Click to Expand</summary>

Duplicated file [/_test_snippets/Mastodon-List-Test-Reverse-NavLinks.js](/_test_snippets/Mastodon-List-Test-Reverse-NavLinks.js)

```
var navUL = selectSidebar.getElementsByTagName("ul")[0];
var navULATag = navUL.getElementsByTagName("a");
var navULATagLen = navULATag.length;
var text = "Navigated to ";

for (i = (navULATagLen-1); i >= 1; i--) {
console.log(text + navULATag[i].href);
}
```
</details>     

<br><br>

</details>

<strong>NOTE</strong> - when the links reached the end of a section the `scrollTo` method 
was sort of an alert to manually click the next\/previous section. Several manual clicks 
had to be done.
  
![example of end of section](/_test_img/screen_for_manual_click.jpg)
  
2. To get the list of the links in sequential or reverse order the snippet 
   `Mastodon-List-Test-[Reverse]-NavLinks` was selected and run.
 
3. In both of the above cases the output from the console was saved to a log file.

   ![save logged console](/_test_img/save_console.jpg)
   
4. The log files were cleaned a bit using regular expressions such as 
   `Mastodon-List-Test-ClickNext:1 [0-9]+\n` to remove unwanted ouput from the console, 
   but examples of what the original saved files genereated are in the 
   `/_test_logs/_EXAMPLE*.log` files. The `/_test_logs/Browser_snippet_Test-*` files 
   are the cleaned results.
   
5. Using the command line, the files were compared with:
   
   `diff --side-by-side "Browser_snippet*-Output-*.log" "Browser_snippet*-Test-*.log > DIFF_*.txt`
   
   This was done for each case \(<em>ordered or reverse</em>\) of the links. All of these test files 
   are in the `/_test_logs` folder.
   
## RESULTS
Both the ordered and reverse tests produced same results. Excluding manual clicks that had to 
be done at the start and end of each section, and the page `/methods/admin/`; all links 
were correct.

<strong>NOTE</strong> - to view were manual clicks occurred look out for:

`**  Manual Click             ********************************`

in `/_test_logs/DIFF_*.txt` files.
    
