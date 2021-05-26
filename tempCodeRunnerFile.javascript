

function pageCount(n, p) {
    /*
		  n: the number of pages in the book
		  p: the page number to turn to
    */

          const pageTurns = Math.floor(p / 2);
          const totalTurns = Math.floor(n / 2);

          console.log(pageTurns, totalTurns)
      
          /* Returns the total number of page turns it takes to get
          to a page or how many it requires if starting from the back */
      
          return Math.min(pageTurns, totalTurns - pageTurns);
 
}
console.log(pageCount(5,2))

//7 4

// 1
// 2 3
// 4 5
// 6 7
// bookLength is left or right side


