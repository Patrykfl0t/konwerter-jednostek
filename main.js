document.write("tak")
const num1 = parseInt(prompt("wprowadz 1 liczbe"))
const num2 = parseInt(prompt("wprowadz 2 liczbe"))
if(isNaN(num1)){
    document.write("to nie jest liczba")
} else if(isNaN(num2)){
    document.write("to nie jest liczba")
} else document.write("wynik: "+ (num1+num2));