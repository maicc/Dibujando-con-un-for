let hola = "#";
let adios = "###";
let espacio1 = "                ";
let espacio2 = "               ";
for (x = 0; x < 5; x++) {
    console.log(espacio1 + hola);
    espacio1 = espacio1.replace(/.$/, " ");
    console.log(espacio2 + adios);
    espacio2 = espacio2.replace(/.$/, "");
    hola = hola + "##";
    adios = adios + "##";
    hola = hola + "##";
    adios = adios + "##";
    espacio1 = espacio1.replace(/.$/, "");
    espacio1 = espacio1.replace(/.$/, "");
    espacio2 = espacio2.replace(/.$/, "");
}
