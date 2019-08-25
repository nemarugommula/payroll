function validate() {
    var base = 0;
    var desig = document.getElementById("desig").value;
    if (desig == "SeniorDeveloper") {
        base = 10000;
    } else if (desig == "Manager") {
        base = 15000;
    } else if (desig == "JuniorDeveloper") {
        base = 6000;
    } else {
        base = 20000;
    }
    var UID = document.getElementById("UID").value;
    var days = document.getElementById("days").value;
    var salary = (days) / (30);
    salary *= base;
    var regx = /^[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/;
    if (regx.test(UID)) {
        document.getElementById("result").innerHTML = " salary is : " + salary;

    } else {
        alert("Invalid UID");
    }
}