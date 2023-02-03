/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo1 = [];
   for(i=0; i<Object.keys(objeto).length;i++){
      var clave = Object.keys(objeto)[i];
      var valor = objeto[clave];
      arreglo1.push([clave, valor])
   }
   //console.log(arreglo1);
   return arreglo1;
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arregloPalabra = string.split('');
   arregloPalabra.sort();
   var objeto ={};
   
   for(var i =0; i<arregloPalabra.length;i++){
      var agregar = true;
      var contador = 0;
      for(var k=0;k<Object.keys(objeto).length;k++){
         if(arregloPalabra[i] === Object.keys(objeto)[k]) agregar = false;
      }
      if(agregar == false) continue;
      for(var j =i; j<arregloPalabra.length; j++){
         if(arregloPalabra[i] === arregloPalabra[j]) contador = contador + 1;
         var propiedad = arregloPalabra[i];
         objeto[propiedad] = contador;
      }
   }
   //console.log(objeto);
   return objeto;
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrPalabra = string.split('');
   var arrMayus = [];
   var arrMin = [];
   for(i=0;i<arrPalabra.length;i++){
      var letra = arrPalabra[i];
      if(letra === letra.toUpperCase()) arrMayus.push(letra);
      else if(letra === letra.toLowerCase()) arrMin.push(letra); 
   }
   var respuesta = arrMayus.join('') + arrMin.join('');
   //console.log(respuesta);
   return respuesta;
}


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
var arrFrase = frase.split(' ')
var arrRespuesta = []
for(var i=0; i<arrFrase.length;i++){
   var arrPalabra = arrFrase[i].split('');
   var alreves = [];
   for(var j=0; j<arrPalabra.length;j++){
      alreves.unshift(arrPalabra[j]);
   }
   arrRespuesta.push(alreves.join(''));
}
var respuesta = arrRespuesta.join(' ');

   //console.log(respuesta);
   return respuesta;
}


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var letNum = numero.toString();
   var arrNum = letNum.split('');
   var revNum =[];
   for(i=0;i<arrNum.length;i++){
      revNum.unshift(arrNum[i]);
   }
   revNum = revNum.join('');; 
   var respuesta = false; 
   if(revNum === letNum) respuesta = true;
   var frase = '';
   if(respuesta== true)frase = "Es capicua";
   else frase = "No es capicua";
   console.log(frase);
   return frase;
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arrPalabra = string.split('');
   var respuesta = [];
   for(var i =0; i<arrPalabra.length; i++){
      if(arrPalabra[i] === 'a'||arrPalabra[i] === 'b'||arrPalabra[i] === 'c' ) continue;
      else respuesta.push(arrPalabra[i]);
   }
   console.log(respuesta.join(''));
   return respuesta.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arrSol =[];
   for(var i=1;i<arrayOfStrings.length; i++){
    
      for(var j=arrayOfStrings.length - 1; j>=i; j--){
        if(arrayOfStrings[j-1].length > arrayOfStrings[j].length) {
         var temp = arrayOfStrings[j-1];
         arrayOfStrings[j-1] = arrayOfStrings[j];
         arrayOfStrings[j] = temp;
        }
      }
      
   }
   console.log(arrayOfStrings);
   arrSol = arrayOfStrings;
   return arrSol;
}
sortArray(["beautiful", "looking","You", "are",]);
function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrSol =[];
   for(var i=0; i<array1.length;i++){
      var añadir = false; 
      for(var j=0; j<array2.length;j++){
         if(array1[i] == array2[j]) añadir = true;
      }
      if(añadir == true)arrSol.push(array1[i]);

   }
   console.log(arrSol);
   return arrSol;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
