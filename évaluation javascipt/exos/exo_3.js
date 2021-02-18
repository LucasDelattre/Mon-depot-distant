var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom=prompt("entrez un prenom");//dmande d'écrire un prénom
if(tab.includes(prenom))//si le prénom entrer est inclu dans le tableau
{
    tab.splice(tab.indexOf(prenom),1)
    tab.push("")
    console.log(tab)
    document.write(tab.join(","))
}
else//si le prénom entrer n'est pas inclu dans le tableau
{
    alert("le prenom n'est pas valide")
}




