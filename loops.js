// part 1
for ( x = 1; x <= 100; x++) {
	if (x % 3 == 0) {
	console.log("Fizz " + x)
  }else if (x%5 == 0) {
	console.log("Buzz " + x)
	}else if ( x % 3 === 0 && x % 5 === 0) {
	console.log("Fizz and Buzz " + x)
	} else {
	console.log(x);
}
}
// part 1 finished



// part 2

function Prime(x) {
    let num=Math.sqrt(x)
        for (i=2; i<=num; i++) {
        if (x%i==0)  return false
        }
       return true
}
const checknum = 31;
console.log(`Is ${checknum} a prime number? `, Prime(checknum));



// // part 3 CSV
// part 3 solution-1
for (let i = 0; i < 1; i++) {
    console.log("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26");
  }

// //   solution-2
const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
for (let i = 0; i < 1; i++) {
	if (str[i] == "\n") {
		continue;
	}
	console.log(str);
}

// solution-3
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26" ;
const mulitRow = csv.split('\n');  
    for (let i = 0; i < mulitRow.length; i++) {
        const singlerow = mulitRow[i].split(',');
		const finalRows = singlerow.join(" ")  
		console.log(finalRows); 
    }

// // part 3 CSV finished！	



