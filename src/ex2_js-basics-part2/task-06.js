function isPrime(number){
    if (number > 1000){
        return "Данные неверны";
    }
    else if (number <= 1){
        return "Число - не простое и не составное"
    }

    for (var i = 2; i < number; i++){
        if ((number % i) === 0){
            return "Число " + number + " - составное число";
        } 
    }
    return "Число " + number + " - простое число"; 
}

module.exports = isPrime;