// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

var text = prompt("Escribe una frase: ");

var nText = text.length;
var i;

for (i = 0; i < nText; i++) {
    if (text.substr(i,1) === "a")  {
    document.write(text.substr(i,1));
    }
}