class Person {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }

  obtenerRFC(){
    return `${this.nombre.match(/\b\w{2}/g).join('')}${this.edad}${this.sexo[0]}`;
  }

  calcularIMC(){
    return (this.peso/Math.pow(this.altura, 2));
  }

  esMayorDeEdad(){
    edad >= 18 ? true : false;
  }
}
