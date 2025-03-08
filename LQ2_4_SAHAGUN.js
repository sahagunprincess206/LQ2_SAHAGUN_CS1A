// creating a matrix
let = prompt("Do you want to create a matrix? (yes/no)").toLowerCase();

if (createMatrix === "yes") {
  let limit1 = parseInt(prompt("Enter the first limit (rows):"));
  let limit2 = parseInt(prompt("Enter the second limit (columns):"));
  let limit3 = parseInt(prompt("Enter the third limit (depth):"));
  
  let str1 = prompt("Enter the first string:");
  let str2 = prompt("Enter the second string:");
  let str3 = prompt("Enter the third string:");
  
  console.log("Generated Matrix:");
  for (let i = 0; i < limit1; i++) {
    for (let j = 0; j < limit2; j++) {
      let rowOutput = "";
      for (let k = 0; k < limit3; k++) {
       // Generating a matrix from it's string and rowOutput
        if (k % 3 === 0) {
          rowOutput += str1 + " ";
        } else if (k % 3 === 1) {
          rowOutput += str2 + " ";
        } else {
          rowOutput += str3 + " ";
        }
      }
      console.log(rowOutput);
    }
    console.log("\n");
  }
} else {
  console.log("Thank you, re-run the program if you change your mind.");
}