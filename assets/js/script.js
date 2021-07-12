function validar(val) {         

    if (val < 1) {
        return 1;
    }

    else if (val) {
        return val;
    }
    
}

function activar1() {
    var num1 = validar(parseFloat(prompt("Escoge el primer numero, mayor a 0, de lo contrario se transformara a 1")));
    var num2 = validar(parseFloat(prompt("Escoge el segundo numero, mayor a 0, de lo contrario se transformara a 1")));
    alert("El Resultado de la Suma de " + num1 + " y " + num2 + " es igual a " + (num1 + num2));
    alert("El Resultado de la Resta de " + num1 + " y " + num2 + " es igual a " + (num1 - num2));
    alert("El Resultado de la Multiplicacion de " + num1 + " y " + num2 + " es igual a " + (num1 * num2));
    alert("El Resultado de la Division de " + num1 + " en " + num2 + " es igual a " + (num1 / num2));

}


function activar2() {
    var temp1 = parseFloat(prompt("Ingresa Una Temperatura en Grados Celsius"));
    alert("La Temperatura el Grados Kelvin es " + Number.parseFloat((temp1 + 273.15)).toFixed(2) + "°");
    alert("La Temperatura en Grandos Fahrenheit " + Number.parseFloat(((temp1 * (9 / 5)) + 32)).toFixed(2) + "°");


}


const dias_en_semana = 7;
const dias_anio = 365;

function activar3() {
    var dias = parseInt(prompt("Ingresa Cuantos Dias Quieres Calcular"));
    var anios, semanas, dias_finales;
    anios = parseInt(dias / dias_anio);
    semanas = parseInt((dias % dias_anio) / dias_en_semana);
    dias_finales = (dias % 365) % dias_en_semana;
    alert("Falta(n) " + anios + " año(s), " + semanas + " semana(s) y " + dias_finales + " dia(s)!!!")
}
function activar4() {
    var valor1 = parseFloat(prompt("Ingresa el Primer Numero"))
    var valor2 = parseFloat(prompt("Ingresa el Segundo Numero"))
    var valor3 = parseFloat(prompt("Ingresa el Tercer Numero"))
    var valor4 = parseFloat(prompt("Ingresa el Cuarto Numero"))
    var valor5 = parseFloat(prompt("Ingresa el Quinto Numero"))
    var promedio = (valor1+valor2+valor3+valor4+valor5) / 5
    alert("El Promedio de los Numeros Ingresados es " + promedio)


}