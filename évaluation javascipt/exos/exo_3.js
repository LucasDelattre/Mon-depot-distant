var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

var prenom=prompt("entrez un prénom entre: " + tab.join('/') + " " + "si le prénom est trouver, alors il sera enlever du tableau");//demande d'écrire un des prénoms dans le tableau
if(tab.includes(prenom))//si le prénom entrer est inclu dans le tableau
{
    tab.splice(tab.indexOf(prenom),1);
    tab.push("");
    console.log(tab);
    document.write(tab.join(",") + "<br>");
}
else//si le prénom entrer n'est pas inclu dans le tableau
{
    alert("le prenom n'est pas valide");
}




