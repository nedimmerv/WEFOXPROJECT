var smallest = 10001;
for(var i = 0; i<=500; i++){
var n = Math.floor(Math.random()*1000);
console.log(n);
if(smallest>n){
    smallest=n;
}
}
console.log("smallest :" +smallest);