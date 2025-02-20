/*
Example functions to practice JavaScript

Lorena Estefania Chewtat Torres
2025-02-19

*/

"use strict";

//exercise 1: find the first non-repeating character in a string
export function firstNonRepeating(string) 
{
    for(let i=0; i<string.length; i++ ) 
    {
        let repeated = false;
        for(let j=0; j<string.length; j++) //compares with all the other characters 
        {
            if(string[i] == string[j] && i != j)
            {
                repeated = true;
                break;
            }
        }
        console.log(`Char: ${string[i]}, ${repeated}`); //shows each character and if it is repeated
        if (!repeated)
        {
            return string[i];
        }
        
    }
    
}

console.log(firstNonRepeating("abacddbec"));

//exercise 2: bubble sort algorithm

export function bubbleSort(list)
{
    for(let i = 0; i < list.length -1; i++)
    {
        for(let j = 0; j < list.length - 1 - i; j++)
        {
            if(list[j] > list[j+1]) //if the current element is greater than the next one,it swaps places
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

//exercise 3: reverses an array without modifying the original

export function invertArray(list)
{
    let newArray = [];
    //Starts at the last index of the array and goes to the first one
    for(let i = list.length - 1; i >= 0; i--)
    {
        newArray.push(list[i]); //adds the elements in reverse order to another array
    }
    return newArray;
}

console.log(invertArray([1,2,3,4,5,6]));

//reverses the original array
export function invertArrayInplace(list) //modifies the original
{
    for(let i = 0; i < list.length / 2; i++)
    {
        let j = list.length - 1 - i; //index that points from the end to the beginning
        let aux = list[i];
        list[i] = list[j];
        list[j] = aux;
    }
    return list;
}
    
console.log(invertArray([5,6,8,9,10]));
console.log(invertArrayInplace([5,6,8,9,10]));

//exercise 4: capitalizes the first letter in a string
export function capitalize(string)
{
    if (string == "") 
    {
        return ""; //if it's empty returns nothing
    }
    
    let newString = string[0].toUpperCase(); //converts the first letter to uppercase
    for(let i = 1; i < string.length; i++)
    {
        if(string[i - 1] == " ") // if the previous character is a space, converts the current character to uppercase
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

//exercise 5: calculates the MCD of two numbers-> https://parzibyte.me/blog
export function mcd(a,b)
{
    let temporal = 0; //A variable to not loose b
    while (b !== 0) 
    {
        temporal = b;
        b = a % b; //euclid's algorithm
        a = temporal;
    }
    return a;
}

console.log(mcd(18,36));

//exercise 6: converts a string to h4ck3r sp34k
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

//exercise 7: get the factors of a number
export function factorize(a)
{
    let factores = [];
    for(let i = 1; i <= a; i++)
    {
        if(a % i == 0) //if i is a divisor, then it's a factor
        {
            factores.push(i);
        }
    }
    return factores;
}

console.log(factorize(12));

//exercise 8: remove duplicates in an array
export function deduplicate(array)
{
    let newArray = [];
    for(let i = 0; i < array.length; i++)
    {
        let duplicate = false;
        for(let j = 0; j < newArray.length; j++)
        {
            if (array[i] == array[j]) //if the element is repeated, then it's not added
            {
                duplicate = true;
                break;
            }
        }
        if (duplicate == false) //if it's not repeated, add it to the new arrangement
        {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(deduplicate([1, 0, 1, 1, 0, 0]));

//exercise 9: find the length of the shortest string in an array
export function findShortestString(array)
{ 
    let arrayLength = 0;

    if(array.length == 0) //if the array is empty, return 0
    {
        arrayLength = 0;
    }
    else
    {
        arrayLength = array[0].length;
        for (let i = 0; i < array.length; i++)
        {
            if(array[i].length < arrayLength) //compares to see which chain is shorter
            {
                arrayLength = array[i].length;
            }
        }
    } 
    return arrayLength;
}

console.log(findShortestString(["hola", "adios", "hasta luego", "yay"]));
console.log(findShortestString([]));

//exercise 10: check if a word is palindrom
export function isPalindrome(string)
{
    let palindrome = true;
    let normalStringA = [];
    let newStringA = [];

    for(let i = 0; i < string.length; i++)
    {
        normalStringA.push(string[i]); //adds each letter of a string to an array
    }

    for(let j = string.length - 1; j >= 0; j--)
    {
        newStringA.push(string[j]); //adds each letter of a string but in reverse to another array
    }

    for(let i = 0; i < normalStringA.length; i++)
    {
        if(normalStringA[i] != newStringA[i])
        {
            palindrome = false; //if the elements are not the same, then it's not palindrom
            break;
        }
    
    }
    return palindrome;

}

console.log(isPalindrome("anilina"));

//exercise 11: sort an array of strings (using selection sort)
export function sortStrings(array)    
{
    for(let i = 0; i < array.length - 1; i++)
    {
        let minimo = i;
        for(let j = i + 1; j < array.length; j++) // finds the "smallest" letter in the unordered array
        {
            if (array[j] < array[minimo]) //changes the position if it's smaller than the minimum
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

//exercise 12: calculates the mean and mode of an array
export function stats(array)
{
    bubbleSort(array);

    let newArray = [];
    let mode = 0;
    let mean = 0;
    
    let maxCont = 0;
    let cont = 0;
    let addition = 0;

    for(let i = 0; i <  array.length; i++)
    {
        addition += array [i]; //adds all the elements of the array
        cont = 1;
        for(let j = i + 1; j < array.length; j++)
        {
            if(array[i] == array[j])
            {
                cont++;
            }
        }

        if(maxCont == cont) //if the current counter is the same as the maximum counter, then there is no mode
        {
            mode = null;
        }

        if (cont > maxCont) //if the current counter is greater than the maximum counter, that is the mode
        {
            maxCont = cont;
            mode = array[i];
        }
        mean = addition / array.length; //divides the sum by the number of total elements
    }
    
    newArray.push(mean, mode); //pushes the values to an array
    return newArray; 
}

console.log(stats([4, 4, 6, 8, 4, 4, 6, 8]));

//exercise 13: returns the most repeated string in an array
export function popularString(array)
{
    //using the same function as mode
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

//exercise 14: verifies if a number is a power of 2
export function isPowerOf2(n)
{
    if (n <= 0)
    {
        return false; //if the number is not positive, then return false
    }
    while (n % 2 == 0) //if the number is even
    {
        n /= 2; //divides the number by 2 in each iteration
    }
    return n == 1; //if after dividing it several times, it returns 1, then if is a power of 2
}

console.log(isPowerOf2(6));

//exercise 15: sort an array in descending order (using selection sort)
export function sortDescending(array) 
{
    for(let i = 0; i < array.length - 1; i++)
    {
        let max = i;
        for(let j = i + 1; j < array.length; j++) 
        {
            if (array[j] > array[max]) //changes the position if it is larger than the maximum
            {
                max = j; 
            }
        }
        let aux = array[i];
        array[i] = array[max];
        array[max] = aux;
    }
    return array;
}

console.log(sortDescending([3,1,12,56,7]));