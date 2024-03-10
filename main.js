var personName = "Muhammad Rayan";
//in lowercase
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//titlecase
console.log("titlecase", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
