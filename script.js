
// BT1
let n = 2;
if (n %2 ==0){
    console.log('n la so chan');
}else{
    console.log(' n la so le');
}
// BT2
let a = 1;
let b = 2;
let c = 3;
if (a>b && a>c) {
    console.log('a max');
}
else if (b>a && b>c) {
    console.log('b max');
}
else {
    console.log('c max')
}

// BT3
let gt =1;
for (let i=1; i<=a; i++){
    gt=gt*i;
}
console.log('giai thua la: '+gt);

// BT4
let i =1;
while( i<n){
    if (i%2==0){
        console.log(i);
    }
    i++;
}
// BT5
let s = 0;
let array =[0,2,-4,8]
    for( let x of array ){ 
        if ( x>0){
            s = s + x;
        }
    }
console.log('tong cac so duong trong mang la: '+s);