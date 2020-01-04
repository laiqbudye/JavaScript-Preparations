// WAP to find out commmon elements from three arrays.

var a = [1,2,3,4,5];
var b = [3,4,5,6,7];
var c = [4,5,6,7,8];

var i = 0, j = 0, k = 0;

while(i < a.length && j < b.length && k < c.length){
    if(a[i] == b[j] && b[j] == c[k]){
        console.log(a[i]);
        i++;
        j++;
        k++;
    }else if(a[i] < b[j]){
        i++;
    }else if(b[j] < c[k]){
        j++;
    }else{
        k++;
    }
}


// o/p -->> 4 5 
