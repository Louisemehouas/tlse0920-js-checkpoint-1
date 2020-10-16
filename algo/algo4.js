/*
Voici un tableau de personnes.
Tu dois écire le code de la fonction findAdult, qui renvoie un
nouveau tableau avec 2 tableaux à l'intérieur: 
- Le premier avec uniquement les femmes adultes.
- Le deuxième avec uniquement les hommes adultes.
(Compte tenu qu'on est adulte à 18 ans)
Exemple : output [ [femmes adultes], [hommes adultes] ]
*/
const persons = [
  { name: "Mary Poppins", age: 32, sex: "female" },
  { name: "Tony Stark", age: 36, sex: "male" },
  { name: "John Doe", age: 12, sex: "male" },
  { name: "Jane Doe", age: 6, sex: "female" },
  { name: "Homer Simpson", age: 45, sex: "male" },
  { name: "Leonardo Di Caprio", age: 42, sex: "male" },
  { name: "Carla Bruni", age: 54, sex: "female" },
  { name: "Lisa Simpson", age: 13, sex: "female" },
  { name: "Millie Bobby Brown", age: 15, sex: "female" },
  { name: "Penelope Cruz", age: 47, sex: "female" }
];

let finalTab = [[],[]];
let menAdults = [];
let womanAdults = [];

function findAdults(persons) {
  for (let i = 0 ; i < persons.length; i++) {
    if (persons[i].sex === "female" && persons[i].age > 18) {
      womanAdults.push(persons[i])
    } else if (persons[i].sex === "male" && persons[i].age > 18) {
      menAdults.push(persons[i])
    } else {
      console.log("It's to young")
    }
  }
  finalTab.splice(0, 0, womanAdults);
  finalTab.splice(1, 0, menAdults);
}

findAdults(persons);
console.log("tab woman inside finalTab = " +finalTab[0])
console.log("tab men inside finalTab = " +finalTab[1])
// can test content of tab in tab with :
// console.log("tab woman inside finalTab = " +finalTab[0][0].name)
// it's first name of man with + 18 years old if first tab, and
// console.log("tab woman inside finalTab = " +finalTab[0][1].name)
// it's first name of woman with + 18 years old if first tab
console.log("--- END ---")