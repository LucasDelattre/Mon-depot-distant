var age = parseInt(prompt("votre age ?"));
if(age <= 0){
alert("vous êtes rudement jeune");
}
else if(age >= 1 && age <= 17){
alert("Vous n'êtes pas encore majeur.");
}
else if(age >= 18 && age <= 49){
alert("vous êtes majeur mais pas encore senior.");
}
else if(age >= 50 && age <= 59){
alert("vous êtes senior mais pas encore retraité");
}
else if(age >= 60 && age <= 120){
alert("vous êtes retraité, profitez de votre temps libre!");
}
else if(age > 120){
alert("vous êtes encore en vie?");
}
else{// si prompt() contient autre chose que les intervenalles de 
//nombres ci-dessous alors l'utilisateur a écrit n'importe quoi

alert("Vous n'avez pas entré d'âge !");
}