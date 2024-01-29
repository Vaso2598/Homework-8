var balance = prompt("შეიყვანეთ ბალანსი", 0);

var percent = prompt("შეიყვანეთ დარიცხული პროცენტი", 10);

var output = parseInt(balance);

var percentInt = parseInt(percent);

output = output + output * percentInt / 100;

if(output > 1500){
    alert("პროცენტის დარიცხვის შემდეგ თანხა იქნება " + output);
    alert("თქვენ გაქვთ საშუალოზე მეტი თანხა")
}
else if(output > 0){
    alert("პროცენტის დარიცხვის შემდეგ თანხა იქნება " + output);
    alert("პთქვენ გაქვთ საშუალოზე ნაკლები თანხა");
}
else{
    alert("პროცენტის დარიცხვის შემდეგ თანხა იქნება " + output);
    alert("პთქვენ ანგარიშზე თანხა არ არის");
}