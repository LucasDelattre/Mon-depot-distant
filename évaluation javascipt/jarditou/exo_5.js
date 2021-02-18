var fnom=new RegExp(/^[A-Za-zéèêëï]+$/);
var fprenom=new RegExp(/^[A-Za-zéèêëï]+$/);
var fcodepostal=new RegExp(/^[0-9]{5}$/);
var fadresse=new RegExp(/^[0-9A-Za-zéèêëï -]+$/);
var fville=new RegExp(/^[A-Za-zéèêëï -]+$/);
var bool=true

function checkForm(formulaireinfo) {
    if(!fnom.test(formulaireinfo.nom.value)){
        document.getElementById("erreurnom").innerHTML="veuillez entrer un champ";
        formulaireinfo.nom.focus();
        return false;//n'envoie pas le formulaire
    }

    if(!fprenom.test(formulaireinfo.prenom.value)){
        document.getElementById("erreurnom").innerHTML="";
        document.getElementById("erreurprenom").innerHTML="veuillez entrer un champ";
        formulaireinfo.prenom.focus();
        return false;
    }

    if(!fcodepostal.test(formulaireinfo.codepostal.value)){
        document.getElementById("erreurnom").innerHTML="";
        document.getElementById("erreurprenom").innerHTML="";
        document.getElementById("erreurcodepostal").innerHTML="veuillez entrer un champ";
        formulaireinfo.codepostal.focus();
        return false;
    }

    if(!fadresse.test(formulaireinfo.adresse.value)){
        document.getElementById("erreurnom").innerHTML="";
        document.getElementById("erreurprenom").innerHTML="";
        document.getElementById("erreurcodepostal").innerHTML="";
        document.getElementById("erreuradresse").innerHTML="veuillez entrer un champ";
        formulaireinfo.adresse.focus();
        return false;
    }

    if(!fville.test(formulaireinfo.ville.value)){
        document.getElementById("erreurnom").innerHTML="";
        document.getElementById("erreurprenom").innerHTML="";
        document.getElementById("erreurcodepostal").innerHTML="";
        document.getElementById("erreuradresse").innerHTML="";
        document.getElementById("erreurville").innerHTML="veuillez entrer un champ";
        formulaireinfo.ville.focus();
        return false;
    }
    // return bool;
    return true;
}


