var balance = prompt("შეიყვანეთ ბალანსი", 0)

var percent = prompt("შეიყვანეთ დარიცხული პროცენტი", 10)

var output = parseInt(balance)

var percentInt = parseInt(percent)

output = output + output * percentInt / 100

alert("პროცენტის დარიცხვის შემდეგ თანხა იქნება " + output)