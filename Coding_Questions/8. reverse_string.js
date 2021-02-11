//write a program which wil reverse the string.


// without in-built methods


function reverse(str){
    let reversedstr = '';

    for(let i = str.length - 1; i >= 0; i--){
        reversedstr += str.charAt(i)
    }   

    return reversedstr;
}

var a = reverse("Laiq");   // qial




//with in-built

var str = 'hello';

var reversedstr = str.split('').reverse().join('');    // olleh
