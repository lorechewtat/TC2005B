/*
Example functions to practice JavaScript

Lorena Estefania Chewtat Torres
2025-02-12

*/

"use strict";

//ejercicio 1: encontrar el primer caracter no repetido en una cadena

export function firstNonRepeating(string) 
{
    for(let i=0; i<string.length; i++ ) 
    {
        let repeated = false;
        for(let j=0; j<string.length; j++) //compara con todos los demas caracteres
        {
            if(string[i] == string[j] && i != j)
            {
                repeated = true;
                break;
            }
        }
        console.log(`Char: ${string[i]}, ${repeated}`); //muestra cada caracter y si esta repetido
        if (!repeated)
        {
            return string[i];
        }
        
    }
    
}

console.log(firstNonRepeating("abacddbec"));

//ejercicio 2: algoritmo bubble sort

export function bubbleSort(list)
{
    for(let i = 0; i < list.length -1; i++)
    {
        for(let j = 0; j < list.length - 1 - i; j++)
        {
            if(list[j] > list[j+1]) //si el elemento actual es mayor que el siguiente, los intercambia de lugar
            {
                let aux = list[j];
                list[j] = list[j+1];
                list[j+1] = aux;
            }
        }
    }
    return list;
}

console.log(bubbleSort([3,4,2,6,1]));

//ejercicio 3: invertir un arreglo sin modificar el original

export function invertArray(list)
{
    let newArray = [];
    //Comienza en el ultimo indice del arreglo y va hasta el primero
    for(let i = list.length - 1; i >= 0; i--)
    {
        newArray.push(list[i]); //agrega los elementos en orden inverso a otro arreglo
    }
    return newArray;
}

console.log(invertArray([1,2,3,4,5,6]));

//invertir el arreglo original
export function invertArrayInplace(list) //modifico el original
{
    for(let i = 0; i < list.length / 2; i++)
    {
        let j = list.length - 1 - i; //indice que apunta del final al inicio
        let aux = list[i];
        list[i] = list[j];
        list[j] = aux;
    }
    return list;
}
    
console.log(invertArray([5,6,8,9,10]));
console.log(invertArrayInplace([5,6,8,9,10]));

//ejercicio 4: capitalizar la primera letra en una cadena
export function capitalize(string)
{
    if (string == "") 
    {
        return ""; //si esta vacio no regresa nada
    }
    
    let newString = string[0].toUpperCase(); //convierte la primera letra a mayúscula
    for(let i = 1; i < string.length; i++)
    {
        if(string[i - 1] == " ") //si el caracter anterior es un espacio, convierte a mayúscula el caracter actual
        {
            newString += string[i].toUpperCase();
        }
        else
        {
            newString += string[i];
        }   
    }
    return newString;
}

console.log(capitalize("hola como estas"));
console.log(capitalize(""));

//ejercicio 5: calcular el máximo comun divisor de dos números-> https://parzibyte.me/blog
export function mcd(a,b)
{
    let temporal = 0; //Para no perder b
    while (b !== 0) 
    {
        temporal = b;
        b = a % b; //algoritmo de euclides
        a = temporal;
    }
    return a;
}

console.log(mcd(18,36));

//ejercicio 6: convertir una cadena a hacker speak
export function hackerSpeak(string)
{ 
    let newString = "";
    for(let i = 0; i < string.length; i++)
    {
        if(string[i] == "a" || string [i] == "A")
        {
            newString += "4";
        }
        else if(string[i] == "e" || string[i] == "E")
        {
            newString += "3";
        }
        else if(string[i] == "i" || string[i] == "I")
        {
            newString += "1";
        }
        else if(string[i] == "o" || string[i] == "O")
        {
            newString += "0";
        }
        else if(string[i] == "s" || string[i] == "S")
        {
            newString += "5";
        }
        else
        {
            newString += string[i];
        }
    }
    return newString;
}

console.log(hackerSpeak("JAVASCRIPT IS COOL"));

//ejercicio 7: obtener los factores de un numero
export function factorize(a)
{
    let factores = [];
    for(let i = 1; i <= a; i++)
    {
        if(a % i == 0) //si i es divisor, es un factor
        {
            factores.push(i);
        }
    }
    return factores;
}

console.log(factorize(12));

//ejercicio 8: eliminar duplicados de un elemento
export function deduplicate(array)
{
    let newArray = [];
    for(let i = 0; i < array.length; i++)
    {
        let duplicate = false;
        for(let j = 0; j < newArray.length; j++)
        {
            if (array[i] == array[j]) //si el elemento esta repetido, entonces no lo agrega
            {
                duplicate = true;
                break;
            }
        }
        if (duplicate == false) //si no esta repetido lo agrega al nuevo arreglo
        {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(deduplicate([1, 0, 1, 1, 0, 0]));

//ejercicio 9: encontrar la longitud de la cadena mas corta de un arreglo
export function findShortestString(array)
{ 
    let arrayLength = 0;

    if(array.length == 0) //si el arreglo esta vacio, regresa 0
    {
        arrayLength = 0;
    }
    else
    {
        arrayLength = array[0].length;
        for (let i = 0; i < array.length; i++)
        {
            if(array[i].length < arrayLength) //compara para ver que cadena es mas corta
            {
                arrayLength = array[i].length;
            }
        }
    } 
    return arrayLength;
}

console.log(findShortestString(["hola", "adios", "hasta luego", "yay"]));
console.log(findShortestString([]));

//ejercicio 10: ver si una palabra es palindromo
export function isPalindrome(string)
{
    let palindrome = true;
    let normalStringA = [];
    let newStringA = [];

    for(let i = 0; i < string.length; i++)
    {
        normalStringA.push(string[i]); //agrega cada letra de un string a un arreglo
    }

    for(let j = string.length - 1; j >= 0; j--)
    {
        newStringA.push(string[j]); //agrega cada letra de un string pero al reves
    }

    for(let i = 0; i < normalStringA.length; i++)
    {
        if(normalStringA[i] != newStringA[i])
        {
            palindrome = false; //si los elementos no son los mismos, no es palindroma
            break;
        }
    
    }
    return palindrome;

}

console.log(isPalindrome("anilina"));

//ejercicio 11: ordenar un arreglo de cadenas (use selection sort) 
export function sortStrings(array)    
{
    for(let i = 0; i < array.length - 1; i++)
    {
        let minimo = i;
        for(let j = i + 1; j < array.length; j++) //busca la letra más "pequeña" en el arreglo desordenado
        {
            if (array[j] < array[minimo]) //cambia la posición si es mas pequeño que el minimo
            {
                minimo = j; 
            }
        }
        let aux = array[i];
        array[i] = array[minimo];
        array[minimo] = aux;
    }
    return array;
}

console.log(sortStrings(["bananas", "manzanas", "uvas", "aguacates", "mangos"]));

//ejercicio 12: calcular la media y la moda de un arreglo
export function stats(array)
{
    bubbleSort(array);

    let newArray = [];
    let mode = 0;
    let media = 0;
    
    let maxCont = 0;
    let cont = 0;
    let suma = 0;

    for(let i = 0; i <  array.length; i++)
    {
        suma += array [i]; //suma todos los elementos del arreglo
        cont = 1;
        for(let j = i + 1; j < array.length; j++)
        {
            if(array[i] == array[j])
            {
                cont++;
            }
        }

        if(maxCont == cont) //si el contador actual es igual que el contador maximo, entonces no hay moda
        {
            mode = null;
        }

        if (cont > maxCont) //si el contador actual es mayor que el contador maximo, esa es la moda
        {
            maxCont = cont;
            mode = array[i];
        }
        media = suma / array.length; //divides la suma entre el numero de elementos totales
    }
    
    newArray.push(media, mode); //agrego los valores a un arreglo
    return newArray; 
}

console.log(stats([4, 4, 6, 8, 4, 4, 6, 8]));

//ejercicio 13: devuelve la cadena de texto que se repita mas en un arreglo
export function popularString(array)
{
    //usando la misma funcion que la moda
    let mostPopular = "";
    
    let maxCont = 0;
    let cont = 0;

    for(let i = 0; i <  array.length; i++)
    {
        cont = 1;
        for(let j = i + 1; j < array.length; j++)
        {
            if(array[i] == array[j])
            {
                cont++;
            }
        }

        if (cont > maxCont)
        {
            maxCont = cont;
            mostPopular = array[i];
        }
    }

    if(maxCont == cont)
    {
        return mostPopular; 
    }

    return mostPopular;
}

console.log(popularString(["one", "two", "thr", "fou"]));

//ejercicio 14: verifica si un número es potencia de 2
export function isPowerOf2(n)
{
    if (n <= 0)
    {
        return false; //si el numero no es positivo, regresa falso
    }
    while (n % 2 == 0) //si el número es par
    {
        n /= 2; //divide el número por 2 en cada iteración
    }
    return n == 1; //si despues de dividirlo varias veces, devuelve 1, entonces si es potencia
}

console.log(isPowerOf2(6));

//ejercicio 15: ordenar un arreglo de forma descendente (usando selection sort)
export function sortDescending(array) 
{
    for(let i = 0; i < array.length - 1; i++)
    {
        let maximo = i;
        for(let j = i + 1; j < array.length; j++) 
        {
            if (array[j] > array[maximo]) //cambia la posición si es mas grande que el maximo
            {
                maximo = j; 
            }
        }
        let aux = array[i];
        array[i] = array[maximo];
        array[maximo] = aux;
    }
    return array;
}

console.log(sortDescending([3,1,12,56,7]));