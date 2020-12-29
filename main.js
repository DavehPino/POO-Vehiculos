'use strict'

//      DECLARACION DE CLASES CON SUS ATRIBUTOS Y METODOS
class Vehiculos {
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

class Autos extends Vehiculos {
    constructor(marca, modelo, precio, puertas){
        super(marca,modelo,precio);
        this.puertas = puertas;
    }
    infoVehiculo(){
        return  `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio} `;
    }
}

class Motocicletas extends Vehiculos {
    constructor(marca, modelo, precio, cilindrada){
        super(marca,modelo,precio);
        this.cilindrada = cilindrada;
    }
    infoVehiculo(){
        return  `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: $${this.precio} `;
    }
}

//       DECLARACION E IMPLEMENTACION DE FUNCIONES DE IMPRESION
const separador = function()
{
    return '============================='
}
const ordenados = function(arr,max,min)
{
    let aux = 0;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i); j++) {
            if (arr[j].precio < arr[j + 1].precio) {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    if(max == false && min == false)
    {
        console.log('Vehiculos ordenados por precio de mayor a menor:');
        arr.forEach(element => console.log(`${element.marca} ${element.modelo}`))
    }
        
    if(max == true && min == false)
    {
        console.log(`Vehiculo mas caro: ${arr[0].marca} ${arr[0].modelo}`);
    }
    if(max == false && min == true)
    {
        console.log(`Vehiculo mas barato: ${arr[arr.length-1].marca} ${arr[arr.length-1].modelo}`);
    }
}

// INSTANCIANDO LOS OBJETOS
const vehiculo1 = new Autos('Peugeot', '206', 200000.00, 4);
const vehiculo2 = new Motocicletas('Honda', 'Titan', 60000.00, '125cc');
const vehiculo3 = new Autos('Peugeot', '208', 250000.00, 5);
const vehiculo4 = new Motocicletas('Yamaha', 'YBR', 80500.50, '160cc');
const vehiculos = new Array;
    vehiculos.push(vehiculo1, vehiculo2, vehiculo3, vehiculo4);


// SALIDA POR PANTALLA DE TODA LA INFORMACION
vehiculos.forEach(vehiculo => console.log(vehiculo.infoVehiculo()));
console.log(separador());
ordenados(vehiculos, true, false);
ordenados(vehiculos, false, true);
const vehiculoY = vehiculos.filter(vehiculo => vehiculo.modelo.includes('Y') );
console.log(`Vehiculo que contiene en el modelo la letra 'Y': ${vehiculoY[0].marca} ${vehiculoY[0].modelo} $${vehiculoY[0].precio}`);
console.log(separador());
ordenados(vehiculos, false, false);
