// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

var text = prompt("Escribe una frase: ");

var nText = text.length;
var i;

for (i = 0; i < nText; i++) {
    if (text.substr(i,1) === "a")  {
    document.write(text.substr(i,1));
    }
    if (text.substr(i,1) === "e")  {
        document.write(text.substr(i,1));
        }
    if (text.substr(i,1) === "i")  {
            document.write(text.substr(i,1));
        }
    if (text.substr(i,1) === "o")  {
            document.write(text.substr(i,1));
        }
    if (text.substr(i,1) === "u")  {
            document.write(text.substr(i,1));
        }
}