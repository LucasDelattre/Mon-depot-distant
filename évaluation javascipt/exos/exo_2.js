var nb=prompt("entrez un nombre")
nb=parseInt(nb)
function tb(nb)
{
    var result;
    var i;
    for(i = 1 ; i <= 10 ; i++)
    {
        result=i*nb;
        console.log(i+" * " + nb +" = "+result);
        document.write(i+" * " + nb +" = "+result+"<br>");
    }

}
tb(nb)