let personName: string = "Muhammad Rayan";

//in lowercase
console.log("lowercase:", personName.toLowerCase());

//in uppercase
console.log("uppercase:", personName.toUpperCase());

//titlecase
console.log("titlecase", personName.replace (/\b\w/g,c=> c.toUpperCase()));