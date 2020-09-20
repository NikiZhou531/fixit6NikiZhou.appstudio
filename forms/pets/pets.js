var petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
var withMarmaduke = [ ]
var withMarmaduke = petNames.slice()
withMarmaduke.push("Marmaduke");

let action = prompt("please pick one of these actions: (1 ,2, 3.... to 7)  \n 1. remove Vinny \n 2. remove Marty \n 3. add Nancy to the front of the array \n 4. add your name to the end of the array \n 5. array index of Riley \n 6. array index of Cindy \n 7. show the 'withMarmaduke' array data");

if (action == 1) {
  petNames.splice(5,1)
  alert("The Action taken was: Remove Vinny \n The remaining data are: \n" + petNames);
} 
  else if (action == 2) {
  petNames.splice(3,1)
  alert("The Action taken was: Remove Marty \n The remaining data are: \n" + petNames);
} 
  else if (action == 3) {
  petNames.unshift("Nancy")
  alert("The Action taken was: Add Nancy to the front of the array \n Now the array are: \n" + petNames);
} 
  else if (action == 4) {
  yourName = prompt("please enter your name: ")
  petNames.push(yourName)
  alert("The Action taken was: Add your name to the end of the array \n Now the array are: \n" + petNames);
} 
  else if (action == 5) {
  alert("The array index for Riley is: \n" + petNames.indexOf("Riley"));
} 
  else if (action == 6) {
  alert("The array index for Riley is: \n" + petNames.indexOf("Cindy"));
} 
  else if (action == 7) {
  alert(withMarmaduke);
}
else {
  alert("please pick an action!")
}