/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80
*/

function thirdAngle(a, b) {
  const angle1 = a;
  const angle2 = b;
  const angle3 = 180 - (angle1 + angle2);
  // Your code here !
  return angle3
}

console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));