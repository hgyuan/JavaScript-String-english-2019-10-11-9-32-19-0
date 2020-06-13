// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
document.write(name.toUpperCase())
// TODO write your code here...


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var temp="";
var isUpper=true;
for(let i =0;i<sentence.length;i++){
    if(sentence.charAt(i)>='a'&&sentence.charAt(i)<='z' &&isUpper){
        temp = temp + sentence.charAt(i).toUpperCase();
        isUpper=false;
    }else {
        temp = temp + sentence.charAt(i);
    }
    if(sentence.charAt(i)===' '){
        isUpper=true;
    }
}
document.write(temp)
//TODO write your code here...


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
money.replace = function (searchValue) {
    return "";
}
document.write(money.replace(/[^0-9]/g,""))
//TODO write your code here...
