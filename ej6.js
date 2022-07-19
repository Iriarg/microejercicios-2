// Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.

var text = prompt("Escribe una frase");
var nText = text.length;
var i;

for (i = 0; i < nText; i++) {
    if (text.substr(i,1) === "a" || "e" || "i" || "o" || "u") {
    document.write(text.substr(i,1));
    }
}