let user_name = prompt("Enter Username:"); //Username
let user_password= prompt("Enter Password:"); //Password

const storedUser = "SahagunPrincess";
const storedPass = "Sisayqtie19";

if (user_name === storedUser && user_password === storedPass) {
  alert('Welcome ${user_name}');
} else {
 alert("Maybe Username or password is invalid or does not match");
}