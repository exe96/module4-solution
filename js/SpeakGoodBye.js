// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.
// ¡NOTA! Los pasos en este archivo son básicamente idénticos a los que
// realizado en el archivo SpeakHello.js.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
// PASO 6: Envuelva todo el contenido de SpeakGoodBye.js dentro de un IIFE
// Ver Clase 52, parte 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// PASO 7: Cree un objeto, llamado 'byeSpeaker' al que adjuntará
// el método "hablar" y que expondrás al contexto global
// Ver Clase 52, parte 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
// NO adjunte la variable speakWord al objeto 'byeSpeaker'.
(function(window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
    // STEP 8: Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2.
    // PASO 8: Vuelva a escribir la función 'hablar' de modo que se adjunte a la
    // objeto byeSpeaker en lugar de ser una función independiente.
    // Ver Clase 52, parte 2

})(window);
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
// PASO 9: Exponer el objeto 'byeSpeaker' al alcance global. Nombralo
// 'byeSpeaker' también en el ámbito global.
// xxxx.xxxx = adiosOrador;