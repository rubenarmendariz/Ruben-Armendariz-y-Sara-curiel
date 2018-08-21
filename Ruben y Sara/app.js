var hacker1 = "ruben";
console.log(hacker1);
var hacker2 = prompt("What is your navigator name?");
console.log("The navigator's name is: " + hacker2);

//condicionals
if(hacker1.length>hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters" );

}
else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has "+ hacker2.length + " characters");
  
}
else{
  console.log("wow, you both got equally long names, "+ hacker1.length+ " characters");
  
}

//loops
var hacker3 = "";
  for(i=0;i<hacker1.length;i++){
    hacker3 +=" "+ hacker1[i].toUpperCase();
  }
console.log(hacker3);

var hacker4 = "";
  
  for(i= hacker2.length -1;i>=0;i--){
    if(i == 0){
     hacker4 += hacker2[i].toUpperCase();
    }else{
      hacker4 += hacker2[i].toLowerCase();
    }
    
  }

console.log(hacker4);
if(hacker1.localeCompare(hacker2)>0){
  console.log("Yo, the navigator goes first definitely");
}else if (hacker1.localeCompare(hacker2)<0) {
  console.log("The driver's name goes first");
} else {
  console.log("you both got the same name?");
}