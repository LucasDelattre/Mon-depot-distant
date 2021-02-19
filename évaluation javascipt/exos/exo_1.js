var age=null;
var jeune=0;
var moyen=0;
var vieux=0;
while(age < 100)// si l'age est inférieur à 100 ans
{
    age=parseInt(prompt("entrez votre age pour un sondage, le sondage s'arrete quand l'age est supérieur à 100"))
    if(age < 20)// si l'age est inférieur à 20 ans
    {
        jeune++;
    }
    else if(age >= 20 && age <= 40)//si l'age est entre 20 et 40 ans
    {
        moyen++;
    }
    else if(age > 40)// si l'age est supérieur à 40 ans
    {
        vieux++;
    }
    else//sinon stop la boucle
    {
    alert("Vous êtes encore en vie :)");
    break;   
    }
}
console.log("il y a " + jeune + " jeune(s), " + moyen +" moyen(s) et " + vieux + "vieux. ");
document.write("il y a " + jeune + " jeune(s), " + moyen +" moyen(s) et " + vieux + "vieux. " + "<br>");



 
                                                                                                                                                                                                                                                                                                                                                                                                                                      
    