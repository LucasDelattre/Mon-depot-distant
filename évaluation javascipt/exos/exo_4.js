alert("Vous passez à la caisse")
var PU=parseInt(prompt("Veuillez scanner le prix de l'objet"));
var QTECOM=parseInt(prompt("Veuillez entrer le nombre d'objets"));
var PAP;
var REM;
var PORT;
var TOT=PU * QTECOM;

if(TOT >= 100 && TOT <= 200)//le total est entre 100 et 200€
{    
    REM=(TOT*5)/100;
    TOT=TOT - REM;
}   
else if(TOT > 200)// le total est au-dessus de 200€
{
    REM=(TOT*10)/100;
    TOT=TOT - REM;
}
else//il n'y a pas de remise car le montant est trop bas
{
    REM=0;
}
console.log("le prix avec la remise est de " + TOT);
alert("le prix avec la remise est de " + TOT);

if(TOT && REM > 500)//quand le total remisé est supérieur à 500€
{
    PORT=0,
    console.log("les frais de port sont gratuit" + PORT);
    alert("les frais de port sont gratuit" + PORT);
}
else if(TOT >= 300 && TOT <= 500)//quand le total remisé est entre 300 et 500€
{
    PORT=(TOT*2)/100;
    TOT=TOT+PORT;
    console.log("les frais de port sont de " + PORT);
    document.write("Les frais de port sont à " + PORT + "€" + "<br>");
    document.write("Le montant est de " + TOT + "€");
    alert("les frais de port sont de " + PORT );
    alert("le prix à payer est de " + TOT +"€");
}
else if(TOT < 300 && TOT > 0)//quand le total remisé est en-dessous de 300€
{
    PORT=6;
    TOT=TOT+PORT;
    console.log("les frais de port sont à " + PORT + "€");
    document.write("Les frais de port sont à " + PORT + "€" + "<br>");
    document.write("Le montant est de " + TOT + "€");
    alert("les frais de port sont à " + PORT + "€");
    alert("le prix à payer est de " + TOT + "€");
}
else//quand le total remisé est de 0€
{
    PORT=0;
    TOT=TOT+PORT;
    console.log("les frais de port sont à " + PORT + "€");
    alert("les frais de port sont à " + PORT + "€");
    document.write("Les frais de port sont à " + PORT + "€" + "<br>");
    document.write("Le montant est de " + TOT + "€");
}