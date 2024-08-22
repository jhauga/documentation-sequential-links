#!/bin/bash
# cleanClickTest.sh
# Process to remove unwanted console text so results from test can be compared.

# Function to make clean and make comparison file.
function cleanAndCompare {
  # Clean extraction of side nav links in sequential order.
  sed -E "s/^Mastodon-List-Test-(([A-Za-z]+)|([A-Za-z]+-[A-Za-z]+)):(([0-9]+)|([0-9]+ [0-9]+))//" _ORIGINAL_Browser_Snippet_Test-Mastodon-List-Output-$1.log > Browser_Snippet_Test-Mastodon-List-Output-$1.log
  # Clean the logged console after running clickNext snippet test.
  sed -E -e "s/^Mastodon-List-Test-([A-Za-z]+):(([0-9]+)|([0-9]+ [0-9]+))//" -E -e "s/^VM([0-9]+) .*$//" -e '/^$/d' _ORIGINAL_Browser_Snippet_Test-Mastodon-List-Test-$2.log > Browser_Snippet_Test-Mastodon-List-Test-$2.log
  # Output difference of cleaned files to DIFF file to compare.
  diff --side-by-side "Browser_Snippet_Test-Mastodon-List-Output-$1.log" "Browser_Snippet_Test-Mastodon-List-Test-$2.log" > DIFF_Browser_Snippet_Test-Mastodon-List-Test-$2-Diff.txt
}

# Start process to compare click next links.
cleanAndCompare "NavLinks" "ClickNext"

# Start process to compare click previous links.
cleanAndCompare "Reverse-NavLinks" "ClickPrev"