// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
// *******************************
// COMIENZA AQUÍ SI QUIERES UN PUNTO DE INICIO MÁS DIFÍCIL PARA ESTA TAREA
// *******************************
//
// Módulo 4 Instrucciones de Asignación.
//
// La idea de esta tarea es tomar una matriz existente de nombres
// y luego enviar Hello 'Name' o Good Bye 'Name' a la consola.
// El programa debe decir "Hola" a cualquier nombre excepto a los que comienzan con "J"
// o "j", de lo contrario, el programa debe decir "Adiós". Entonces, la salida final
// en la consola debería verse así:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!
¡¡¡ADVERTENCIA!!! ¡¡¡ADVERTENCIA!!!
¡El código NO funciona actualmente! Es TU trabajo hacer que funcione
como se describe en los requisitos y los pasos para completar este
asignación.
¡¡¡ADVERTENCIA!!! ¡¡¡ADVERTENCIA!!!
*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
// PASO 1:
// Envuelve todo el contenido de script.js dentro de un IIFE
// Ver Clase 52, parte 2
// (Nota, el paso 2 se realizará en el archivo SpeakHello.js).
(function(window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // STEP 10:
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpeaker's or byeSpeaker's 'speak' method.
    // See Lecture 50, part 1
    // PASO 10:
    // Recorra la matriz de nombres y diga 'Hola' o "Adiós"
    // utilizando el método 'speak' de helloSpeaker o byeSpeaker.
    // Ver Clase 50, parte 1
    for (var name in names /* fill in parts of the 'for' loop to loop over names array */
            /* rellena partes del bucle 'for' para recorrer la matriz de nombres */
    ) {
        var word = names[name];
        var resultWord = word.toLowerCase();
        var finalResultword = resultWord.charAt(0);



        // STEP 11:
        // Retrieve the first letter of the current name in the loop.
        // Use the string object's 'charAt' function. Since we are looking for
        // names that start with either upper case or lower case 'J'/'j', call
        // string object's 'toLowerCase' method on the result so we can compare
        // to lower case character 'j' afterwards.
        // Look up these methods on Mozilla Developer Network web site if needed.
        // var firstLetter =
        // PASO 11:
        // Recuperar la primera letra del nombre actual en el ciclo.
        // Usa la función 'charAt' del objeto de cadena. Ya que estamos buscando
        // nombres que comienzan con mayúscula o minúscula 'J'/'j', llame
        // encadena el método 'toLowerCase' del objeto en el resultado para que podamos comparar
        // para poner en minúsculas el carácter 'j' después.
        // Busque estos métodos en el sitio web de Mozilla Developer Network si es necesario.
        // var primeraLetra =

        // STEP 12:
        // Compare the 'firstLetter' retrieved in STEP 11 to lower case
        // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
        // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
        // name in the loop.
        // PASO 12:
        // Compara la 'primera letra' recuperada en el PASO 11 con minúsculas
        // 'j'. Si es lo mismo, llame al método 'hablar' de byeSpeaker con el nombre actual
        // en el lazo. De lo contrario, llame al método 'hablar' de helloSpeaker con el actual
        // nombre en el bucle.


        if (finalResultword === "j"
            /* fill in condition here */
            /* rellena la condición aquí */
        ) {
            byeSpeaker.speak(names[name]);
            // byeSpeaker.xxxx
        } else {
            helloSpeaker.speak(names[name]);
            // helloSpeaker.xxxx
        }
    }
})(window);