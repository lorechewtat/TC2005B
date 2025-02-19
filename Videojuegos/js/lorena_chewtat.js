/*
Example functions to practice JavaScript

Lorena Estefania Chewtat Torres
2025-02-12

*/

"use strict";

// ejercicio 1

export function firstNonRepeating(string) 
{
    for(let i=0; i<string.length; i++ ) //let es el unico tipo de variable
    {
        let repeated = false;
        for(let j=0; j<string.length; j++)
        {
            if(string[i] == string[j] && i != j)
            {
                repeated = true;
                break;
            }
        }
        console.log(`Char: ${string[i]}, ${repeated}`); //para imprimir varias cosas ``
        if (!repeated)
        {
            return string[i];
        }
        
    }
    
}

console.log(firstNonRepeating("abacddbec"));

//ejercicio 2

export function bubbleSort(list)
{
    for(let i = 0; i < list.length -1; i++)
    {
        for(let j = 0; j < list.length - 1 - i; j++)
        {
            if(list[j] > list[j+1])
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

//ejercicio3 

export function invertArray(list)
{
    let newArray = [];
    //Comienza en el ultimo indice del arreglo y va hasta el primero
    for(let i = list.length - 1; i >= 0; i--)
    {
        newArray.push(list[i]);
    }
    return newArray;
}

console.log(invertArray([1,2,3,4,5,6]));

export function invertArrayInplace(list) //modifico el original
{
    for(let i = 0; i < list.length / 2; i++)
    {
        let j = list.length - 1 - i; 
        let aux = list[i];
        list[i] = list[j];
        list[j] = aux;
    }
    return list;
}
    


console.log(invertArray([5,6,8,9,10]));
console.log(invertArrayInplace([5,6,8,9,10]));


//ejercicio 4 
export function capitalize(string)
{
    if (string == "")
    {
        return "";
    }
    
    let newString = string[0].toUpperCase();
    for(let i = 1; i < string.length; i++)
    {
        if(string[i - 1] == " ")
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

//ejercicio 5 -> https://parzibyte.me/blog
export function mcd(a,b)
{
    let temporal = 0; //Para no perder b
    while (b !== 0) 
    {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
}

console.log(mcd(18,36));

//ejercicio 6
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

//ejercicio 7
export function factorize(a)
{
    let factores = [];
    for(let i = 1; i <= a; i++)
    {
        if(a % i == 0)
        {
            factores.push(i);
        }
    }
    return factores;
}

console.log(factorize(12));

//ejercicio 8
export function deduplicate(array)
{
    let newArray = [];
    for(let i = 0; i < array.length; i++)
    {
        let duplicate = false;
        for(let j = 0; j < newArray.length; j++)
        {
            if (array[i] == array[j])
            {
                duplicate = true;
                break;
            }
        }
        if (duplicate == false)
        {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(deduplicate([1, 0, 1, 1, 0, 0]));

//ejercicio 9
export function findShortestString(array)
{ 
    let arrayLength = 0;

    if(array.length == 0)
    {
        arrayLength = 0;
    }
    else
    {
        arrayLength = array[0].length;
        for (let i = 0; i < array.length; i++)
        {
            if(array[i].length < arrayLength)
            {
                arrayLength = array[i].length;
            }
        }
    } 
    return arrayLength;
}

console.log(findShortestString(["hola", "adios", "hasta luego", "yay"]));
console.log(findShortestString([]));

//ejercicio 10
export function isPalindrome(string)
{
    let palindrome = true;
    let normalStringA = [];
    let newStringA = [];

    for(let i = 0; i < string.length; i++)
    {
        normalStringA.push(string[i]);
    }

    for(let j = string.length - 1; j >= 0; j--)
    {
        newStringA.push(string[j]);
    }

    for(let i = 0; i < normalStringA.length; i++)
    {
        if(normalStringA[i] != newStringA[i])
        {
            palindrome = false;
            break;
        }
    
    }
    return palindrome;

}

console.log(isPalindrome("anilina"));

//ejercicio 11 
export function sortStrings(array) //usando selection sort   
{
    for(let i = 0; i < array.length - 1; i++)
    {
        let minimo = i;
        for(let j = i + 1; j < array.length; j++) //busca el elemento minimo en el arreglo desordenado
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

//ejercicio 12 ?
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
        suma += array [i];
        cont = 1;
        for(let j = i + 1; j < array.length; j++)
        {
            if(array[i] == array[j])
            {
                cont++;
            }
        }

        if(maxCont == cont)
        {
            mode = null;
        }

        if (cont > maxCont)
        {
            maxCont = cont;
            mode = array[i];
        }
        media = suma / array.length;
    }
    
    newArray.push(media, mode);
    return newArray; 
}

console.log(stats([4, 4, 6, 8, 4, 4, 6, 8]));

//ejercicio 13 ?
export function popularString(array)
{
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
        console.log("No hay moda.");
    }

    return mostPopular;
}

console.log(popularString(["hola", "yay", "hola", "como estas"]));

//ejercicio 14 ??
export function isPowerOf2(n)
{
    if (n <= 0)
    {
        return false;
    }
    while (n % 2 == 0)
    {
        n /= 2;
    }
    return n == 1;
}

console.log(isPowerOf2(6));

//ejercicio 15
export function sortDescending(array) 
{
    for(let i = 0; i < array.length - 1; i++)
    {
        let minimo = i;
        for(let j = i + 1; j < array.length; j++) //busca el elemento minimo en el arreglo desordenado
        {
            if (array[j] > array[minimo]) //cambia la posición si es mas pequeño que el minimo
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

console.log(sortDescending([3,1,12,56,7]));