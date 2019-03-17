function isPrime(number){
    var r;
    if (number > 1000){
        return "Данные неверны";
    }
    else if (number <= 1){
        return "Число - не простое и не составное"
    }

    for (r = 2; r < number; r++){
        if ((number % r) === 0){
            return "Число " + number + " - составное число";
        } 
    }
    return "Число " + number + " - простое число"; 
}

module.exports = isPrime;