// Replaces the word cloud with the word unicorn in an html document
var cloudReplace = new RegExp(/cloud/gi);
document.body.innerHTML = document.body.innerHTML.replace( cloudReplace, 'unicorn');
