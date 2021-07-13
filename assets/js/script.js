/* ESTA FUNCION ES PARA QUE EL NUMERO INGRESADO SEA IGUAL O MAYOR A 1 QUE ES LO QUE SOLICITAN */

function validar(val) {         

    if (val < 1) {
        return 1;
    }

    else if (val) {
        return val;
    }
    
}
/* ESTA ES LA FUNCION PARA REALIZAR TODAS LAS OPERACIONES BASICAS A 2 NUMEROS IGUALES O MAYORES A 1 */

function activar1() {
    var num1 = validar(parseFloat(prompt("Escoge el primer numero. \n Debe ser Mayor a 0, de lo contrario se transformara a 1")));
    var num2 = validar(parseFloat(prompt("Escoge el segundo numero. \n Debe ser Mayor a 0, de lo contrario se transformara a 1")));
    var suma = num1+num2;
    var resta = num1-num2;
    var multiplicacion = num1*num2;
    var division = num1/num2;
    var modal = num1%num2;
    alert("El Resultado de la Suma de " + num1 + " y " + num2 + " es igual a " + (suma));
    alert("El Resultado de la Resta de " + num1 + " y " + num2 + " es igual a " + (resta));
    alert("El Resultado de la Multiplicacion de " + num1 + " y " + num2 + " es igual a " + (multiplicacion));
    alert("El Resultado de la Division de " + num1 + " en " + num2 + " es igual a " + (division));
    alert("El Sobrante de la Division entre " + num1 + " y " + num2 + " es igual a " + (modal));
    /* ESTO LO REPITO EN LAS DEMAS FUNCIONES, ES PARA MODIFICAR LA PANTALLA NEGRA QUE QUEDA BAJO LOS BOTONES CON EL RESULTADO */
    document.getElementById("pantalla").innerHTML = "<ul><li>El Resultado de la Suma de " + num1 + " y " + num2 + " es igual a " + (suma) + "</li><li> El Resultado de la Resta de " + num1 + " y " + num2 + " es igual a " + (resta) + "</li><li>El Resultado de la Multiplicacion de " + num1 + " y " + num2 + " es igual a " + (multiplicacion) + "</li><li> El Resultado de la Division de " + num1 + " en " + num2 + " es igual a " + (division) + "</li><li>El Sobrante de la Division entre " + num1 + " y " + num2 + " es igual a " + (modal) + "</li></ul>";

}

/* ESTA ES LA FUNCION PARA CALCULAR LOS GRADOS EN KELVIN Y FAHRENHEIT */

function activar2() {
    var temp1 = parseFloat(prompt("Ingresa Una Temperatura en Grados Celsius"));
    alert("La Temperatura de " + temp1+ "°C en Grados Kelvin es " + Number.parseFloat((temp1 + 273.15)).toFixed(2) + "°");
    alert("La Temperatura de " + temp1+ "°C en Grandos Fahrenheit " + Number.parseFloat(((temp1 * (9 / 5)) + 32)).toFixed(2) + "°");
    document.getElementById("pantalla").innerHTML = "<ul><li>La Temperatura de " + temp1+ "°C el Grados Kelvin en " + Number.parseFloat((temp1 + 273.15)).toFixed(2) + "°" + "</li><li> La Temperatura de " + temp1+ "°C en Grandos Fahrenheit " + Number.parseFloat(((temp1 * (9 / 5)) + 32)).toFixed(2) + "°</li></ul>";

}

/* DEFINO COMO CONSTANTES ESTOS DOS VALORES */
const dias_en_semana = 7;
const dias_anio = 365;
/* ESTA ES LA FUNCION PARA CONVERTIR LOS DIAS, EN AÑOS, SEMANAS Y DIAS */
function activar3() {
    var dias = parseInt(prompt("Ingresa Cuantos Dias Quieres Calcular"));
    var anios, semanas, dias_finales;
    anios = parseInt(dias / dias_anio);
    semanas = parseInt((dias % dias_anio) / dias_en_semana);
    dias_finales = (dias % 365) % dias_en_semana;
    alert("Sería(n) " + anios + " año(s), " + semanas + " semana(s) y " + dias_finales + " día(s)!!!")
    document.getElementById("pantalla").innerHTML = "Los " + dias + " dias Ingresados, Sería(n) " + anios + " año(s), " + semanas + " semana(s) y " + dias_finales + " día(s)!!!";
}
/* ESTA ES LA FUNCION PARA SACAR EL PROMEDIO... EN LA ULTIMA PARTE PRACTIQUE LA INTERPOLACION */
function activar4() {
    var valor1 = parseFloat(prompt("Ingresa el Primer Numero"))
    var valor2 = parseFloat(prompt("Ingresa el Segundo Numero"))
    var valor3 = parseFloat(prompt("Ingresa el Tercer Numero"))
    var valor4 = parseFloat(prompt("Ingresa el Cuarto Numero"))
    var valor5 = parseFloat(prompt("Ingresa el Quinto Numero"))
    var promedio = (valor1+valor2+valor3+valor4+valor5) / 5
    alert("El Promedio de los Numeros Ingresados es " + promedio)
    document.getElementById("pantalla").innerHTML = `El Promedio de los Numeros Ingresados (${valor1}, ${valor2}, ${valor3}, ${valor4} y ${valor5}) es ${promedio}`;

}