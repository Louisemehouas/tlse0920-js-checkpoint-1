/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100
*/

function theaterSieges() {
  // Your code here !
  const col = 26;
  const seats = 100;
  let seatList = []
  for(let i=1; i<=col; i++){
    let subList = [];
    for(let j = 1; j<=seats; j++){
      seatList.push(`${i} - ${j}`);
    }
  }
  // console.log(seatList);
  return seatList;
}

console.log(theaterSieges());