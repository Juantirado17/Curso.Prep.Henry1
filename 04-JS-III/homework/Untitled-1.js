
// let numero = -1;
// let contador = 0;
// let numeroAumentado = numero;
//  do {
//   numeroAumentado = numeroAumentado + 5;
//   contador ++
//  } while (contador < 8);
//   //return numeroAumentado;
//   console.log(numeroAumentado)

// function crearGato(nombre, edad) {
// const objeto = {
//     nombre: nombre,
//     edad: edad,
//     meow: function () {
//     return "Meow!"
//     }
//   }
//     // return objeto;
//     console.log(objeto)
// }
  
//let numero = [1,2,3,4];
// return numero[0];
// console.log(numero[3])
// console.log(numero[numero.length - 1])
// console.log(numero.length)
// for (let i = 0; i < numero.length; i++) {
//     numero[i] = numero[i] + 1;
// }
// // console.log(numero)
// numero.push(5)
// // console.log(numero)
// let suma = numero.reduce((a,b) => a + b);
// console.log(suma)
// let suma = 0;
// for (let i = 0; i < numero.length; i++) {
//     suma = suma + numero[i];
// // }
// // console.log(suma)
// let suma = numero.reduce((a,b) => a + b);
// let promedio = suma/numero.length;
// // console.log(promedio)
// const filtro = [97, 20, 90, 50, 7, 709];
//  let mayor = 0
//  for (let i = 0; i< filtro.length; i++) {
//      if(filtro[i] > 18){
//         mayor = mayor + 1
//     };
    
//   }
//   console.log(mayor)
  
// let mayor = filtro.filter(numero => numero > 18);
// console.log(mayor)

// const arr = [1, 2, 3];

// const string = arr.toString(); // "1,2,3"
// console.log(string)

// let text = new String("Hello World!");
// let result = text.toString();
// console.log(result)

//  const nuevoObjeto = {
//      decirHola:  function (){
//         console.log('Hola atodo el Mundo!');
//     }
//  }
//  nuevoObjeto.decirHola()

//  const usuario = {
//     userName : 'Juan Perez',
//     password : 'jkiuyt123',
//     lovesJavascript : true,
//     favoriteNumber : 42,
//     decirHola:  function (){
//      console.log(this.userName + ' ' + 'Hola a todo el Mundo!');
//   }
//  };
// //  for (const key in usuario) {
// //     console.log(key)
// //     console.log(key,usuario[key])
// //  }
// usuario.decirHola()

// function f1(){
//     return this;
// }
// f1()
// console.log(this)
// var o = {
//     prop : 37,
//     f : function(){
//         return this.prop;
//     }
// };
// console.log(o.f())

// var o = { prop : 37};

// function loguea(){
//        return this.prop;
//     }
//     o.f = loguea;
// //     console.log(o.f())
// var obj = {
//     nombre : 'Objeto',
//     log : function(){
//         this.nombre = 'Cambiado';
//         console.log(this)

//         var that = this;

//         var cambia = function(str){
//             that.nombre = str;
//         }
//         cambia('¡Hola!!!');
//         console.log(this);
//     }
// }
// console.log(obj)
// const test = {
//     prop: 42,
//     func: function() {
//       return this.prop;
//     },
//   };
  
//   console.log(test.func());
// function getThis() {
//     return this;
//   }
  
//   const obj1 = { name: "obj1" };
//   const obj2 = { name: "obj2" };
  
//   obj1.getThis = getThis;
//   obj2.getThis = getThis;
  
//   console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
//   console.log(obj2.getThis());


// function saludar(){
//     console.log('Hola, ' + this.nombre )
// }

// var juan = {
// nombre : 'juan',
//     saludar : saludar

// };
// juan.saludar()

// var jose = {
//     nombre : 'jose',
//         saludar : saludar
    
//     };
//     jose.saludar()

    // function getEdad(){
    //     return this.edad * 2;

    // };
    
    // var obj1 = {
    //     edad : 32,
    //     getEdad : getEdad
    // };
    // var obj2 = {
    //     edad : 16,
    //     getEdad : getEdad
    // };
    // obj1.getEdad();
 
// function Gato(nombre){
//     this.nombre = nombre;
//     this.maullar = function(){
//         return 'Mi nombre es ' + this.nombre + '..... Meow!';
//     }
// }
// const sam = new Gato('Sam');
// const Kitty = new Gato('Kitty');
// console.log(sam.maullar())
// console.log(Kitty.maullar())


// var removeDuplicates = function(nums) {
//     let insertIndex = 1;
//     for(let i = 1; i < nums.length; i++){
//         // We skip to next index if we see a duplicate element
//         if(nums[i - 1] != nums[i]){  
//             /* Storing the unique element at insertIndex index and incrementing
//                the insertIndex by 1 */
//             nums[insertIndex] = nums[i];  
//             insertIndex++; 
//         }
//     }
//     console.log(insertIndex);
// // };
// var num = [1,1,1,2,2,3,4,4];
// // var suma = num.reduce((numero,elemento) => numero + elemento, 10);
// // // console.log(suma)
// var array = [];
// var final = 1
// for (let i = 1; i < num.length; i++) {
//     if(num[i - 1] != num[i]){ 
//         num[final] = num[i]; 
//         final++;
        
//     }
    
// }
// console.log(final)
// console.log(array)

// let insertIndex = 1;
//     for(let i = 1; i < num.length; i++){
//         // We skip to next index if we see a duplicate element
//         if(num[i - 1] !== num[i]){  
//             /* Storing the unique element at insertIndex index and incrementing
//                the insertIndex by 1 */
//             num[insertIndex] = num[i];  
//             insertIndex++; 
//         }
//     }
//     //return insertIndex;
//     console.log(insertIndex);

let arr = [20, 31, 11, 15, 32];
 var mayor = arr[0];
  var menor = arr[0];
  mayor = menor = arr[0];
  for (var i = 0; i < arr.length; i++) {
    
   let value = arr[i];
   menor = (value < menor) ? value : menor
   mayor = (value > mayor) ? value : mayor
   var resta = mayor - menor;
  }
  console.log(resta);
    
