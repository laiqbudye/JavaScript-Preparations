// WAP which will convert first letter of each word to uppercase
// i/p:- hello i am laiq iqbal budye
// o/p:- Hello I Am Laiq Iqbal Budye


function firstCapital(str){
    var strArr = str.split(" ");

    for(let i = 0; i<strArr.length; i++) {
       strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1);
    }
    console.log(strArr.join(" "));
}


firstCapital("hello i am laiq iqbal budye")  // Hello I Am Laiq Iqbal Budye
