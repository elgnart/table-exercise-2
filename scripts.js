// -------------------

// ##Table Generator (Version 2)##

// Write a function that will generate a table of alternating characters of 'x' and 'o' based on a user-specified number of rows and columns.

// **Input:**

//  - number of rows
//  - number of columns

// **Example:**
// createTable(5, 5)

// **Output:**

// xoxox
// oxoxo
// xoxox
// oxoxo
// xoxox

// -------------------


// function table()
// {
// 	var rows = parseInt(prompt("How many rows?"));
// 	var columns = parseInt(prompt("How many columns?"));
// 	var text="";


// 	for(var i=1; i<=rows; i++){
// 		for(var j=1; j<=columns; j++){
// 			if (i % 2 === 1 && j % 2 === 1){
// 				text+="x";
// 			}

// 			if (i % 2 === 1 && j % 2 === 0){
// 				text+="o";

// 			if (i % 2 === 0 && j % 2 === 1){
// 				text+="x";
// 			}

// 			if (i % 2 === 0 && j % 2 === 0){
// 				text+="o";	
// 			}
// 		}
// 			text += "\n";

// 	}
// 		return text;
// }
// }

// document.write(table());



function table()
{
	var rows = parseInt(prompt("How many rows?"));
	var columns = parseInt(prompt("How many columns?"));
	var text="";


	for(var i=1; i<=rows; i++){
		for(var j=1; j<=columns; j++){
			if (i % 2 === 1 && j % 2 === 1){
				text+="x";
			}

			if (i % 2 === 1 && j % 2 === 0){
				text+="o";
			}
			
			if (i % 2 === 0 && j % 2 === 1){
				text+="o";
			}

			if (i % 2 === 0 && j % 2 === 0){
				text+="x";	
			}
		}
			// text += "\n";
			text += "<br />"

	}
		return text;
}


document.write(table());







