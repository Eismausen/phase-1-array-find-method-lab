
/*Write a function called `superbowlWin()` in `index.js`:

* The function should receive 1 argument, an `Array` of JavaScript `Object`s
* Each object has two properties: `year` and `result`
* It should use `find()` to test each `Object` to see if the `result` is `"W"` —
  a win!
* It should return the `year` when the win occurred (if it occurred at all!)
* If no win is found, it should return, sadly, `undefined`*/

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    
  ]

function winFinder(object) {
    return (object.result === 'W');
}  

function superbowlWin(arrObjs) {
    let found = arrObjs.find(winFinder);
    if (found) {
        return found.year;
    } else {
        return found;
    }
}

