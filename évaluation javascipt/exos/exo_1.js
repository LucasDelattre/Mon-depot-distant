var age=null;
var jeune=0;
var moyen=0;
var vieux=-1;
while(age <= 100)// si l'age est inférieur à 100 ans
{
    age=parseInt(prompt("entrer votre age"))
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
    else
    {
    break;
    }
}
console.log("il y a " + jeune + " jeune(s), " + moyen +" moyen(s) et " + vieux + "vieux. ");
document.write("il y a " + jeune + " jeune(s), " + moyen +" moyen(s) et " + vieux + "vieux. ");



 
                                                                                                                                                                                                                                                                                                                                                                                                                                      
    