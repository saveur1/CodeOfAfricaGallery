/*
    PROBLEM STATEMENT::
    Given a string, transform it based on the following rules:
        ● If the length of the string is divisible by 3, reverse the entire string.
        ● If the length of the string is divisible by 5, replace each character with its ASCII code.
        ● If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.
    Example:
    Input: "Hello World"
    Output: "87 111 114 108 100 32 111 108 108 101 72"
*/

function stringReverse(str) {
    let output = '';

    for( let i=str.length-1; i>=0; i-- ){
        output += str[i];
    }
    //returs reverse of input string
    return output;
}

function getAsciiCode(str){
    let output = '';

    for( let i=0; i< str.length; i++ ){
        output += str.charCodeAt(i)+" ";
    }

    return output.trim();
}

function doStringTransform(str){
    //ge string length
    const strLength = str.length;

    //reverse string if length is divisible by 3
    if(strLength%3 == 0)
        str = stringReverse(str);

    //return ASCII code if string length is divisible by 5
    if(strLength%5 == 0)
        str = getAsciiCode(str);

    
    return str.trim();
}


//**********MAIN FUNCTION CONTAINS TEST CASES FOR ABOVE FUNCTION**********************

function main(){

    let str = "What a Test!"; //length:12
    let expected = "!tseT a tahW";
    let output = doStringTransform(str);

    //test case 1. STRING DIVISIBLE BY 3(Reversed String)
    console.log("\nIF STRING DIVISIBLE BY 3 REVERSE STRING");
    console.log("Output: " + output);
    console.log("Expected: " + expected);
    console.log(`Match?: ${ output == expected }`);

    //test case 2. STRING DIVISIBLE BY 5(ASCII CODE)
    str = "Hello"; //length: 5
    expected = "72 101 108 108 111";
    output = doStringTransform(str);
    console.log("\nIF STRING DIVISIBLE BY 5 RETURN ASCII CODE");
    console.log("Output: " + output);
    console.log("Expected: " + expected);
    console.log(`Match?: ${ output == expected }`);

    //test case 3. STRING DIVISIBLE BY 3 and 5 REVERSE AND ASCII CODE
    str = "Fifteen charact"; //length: 15   //reverse: tcarahc neetfiF
    expected = "116 99 97 114 97 104 99 32 110 101 101 116 102 105 70";
    output = doStringTransform(str);
    console.log("\nIF STRING DIVISIBLE BY 5 RETURN ASCII CODE");
    console.log("Output: " + output);
    console.log("Expected: " + expected);
    console.log(`Match?: ${ output == expected }`);

    //test case 4. STRING  WHICH IS NOT DIVISIBLE BY EITHER 3 OR 5(stay the same)
    str = "Rwandan"; //length: 7
    expected = "Rwandan";
    output = doStringTransform(str);
    console.log("\nIF STRING Not DIVISIBLE by either 3 or 5(Don't change)");
    console.log("Output: " + output);
    console.log("Expected: " + expected);
    console.log(`Match?: ${ output == expected }`);

}

main()