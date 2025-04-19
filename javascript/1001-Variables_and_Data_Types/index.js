/*
{
  "id": 1001,
  "title": "Variables and Data Types",
  "description": "Declaración de variables usando var, let y const, y comprensión de tipos primitivos y objetos."
}
*/

/*
  Concepto: Variables and Data Types
  Descripción: Este archivo muestra cómo declarar variables en JavaScript usando `var`, `let` y `const`,
  y los distintos tipos de datos primitivos que existen.
*/

// ------------------ VARIABLES ------------------

// var (forma antigua, con problemas de scope)
var nombre = "Ariel";
console.log("var nombre:", nombre);

// let (forma moderna, permite reasignar)
let edad = 30;
edad = 31;
console.log("let edad:", edad);

// const (constante, no se puede reasignar)
const pais = "Argentina";
// pais = "Brasil"; Error
console.log("const pais:", pais);

// ------------------ TIPOS DE DATOS PRIMITIVOS ------------------

// String
let texto = "Hola mundo";
console.log("String:", texto);

// Number
let numero = 42;
console.log("Number:", numero);

// Boolean
let esActivo = true;
console.log("Boolean:", esActivo);

// Null (intencionalmente sin valor)
let vacio = null;
console.log("Null:", vacio);

// Undefined (variable declarada pero no inicializada)
let sinDefinir;
console.log("Undefined:", sinDefinir);

// Symbol (valor único e inmutable)
let simbolo = Symbol("id");
console.log("Symbol:", simbolo);

// BigInt (para números enteros muy grandes)
let numeroGrande = 1234567890123456789012345678901234567890n;
console.log("BigInt:", numeroGrande);
