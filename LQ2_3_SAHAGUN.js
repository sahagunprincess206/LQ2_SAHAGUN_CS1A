let choice, qty, price;
//list of choices
do {
  choice = prompt("Enter your choice:\nA. Pepsi Cola - $1.50\nB. Coca Cola - $1.50\nC. Apple (per kg) - $2.00\nD. Orange (per kg) - $2.50\nE. Hotdogs (per kg) - $3.00").toUpperCase();
} while (!"ABCDE".includes(choice));

qty = parseInt(prompt("Enter quantity:")); // choose in different cases

switch (choice) {
  case "A":
  case "B":
    price = 1.50;
    break;
  case "C":
    price = 2.00;
    break;
  case "D":
    price = 2.50;
    break;
  case "E":
    price = 3.00;
    break;
}
