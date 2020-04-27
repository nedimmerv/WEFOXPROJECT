var word=prompt();
word=word.replace(" ","");
var reverse="";
for(let i=word.length;i>=0;i--){
reverse+=word.charAt(i);
}
console.log(reverse);
if(word.toLowerCase==reverse.toLowerCase){
    
console.log("Palindrome");
}else{
    console.log("Not polindrome");
}
