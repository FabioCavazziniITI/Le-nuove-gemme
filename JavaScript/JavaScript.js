function prenota()
{

    var n1 = parseInt(document.getElementById("q1").value) || 0;
    var n2 = parseInt(document.getElementById("q2").value) || 0;
    var n3 = parseInt(document.getElementById("q3").value) || 0;
    var n4 = parseInt(document.getElementById("q4").value) || 0;
    var somma = 0;
    var sommac = 0;

    var c1 = n1*2.50;
    var c2 = n2*4.90;
    var c3 = n3*2.90;
    var c4 = n4*3.50;
    
    somma = n1 + n2 + n3 + n4;
    sommac = c1 + c2 + c3 + c4;
    alert("Grazie per acquistato presso Le nuove Gemme");
    alert("Articoli comprati: " +somma);
    alert("Spesa totale: " +sommac);
}