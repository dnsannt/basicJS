function scoreChecker(score) {

    let result = "";

    if(score <= 100 && score >= 90) {
        result = "Selamat! Anda mendapatkan nilai A."
    } else if(score < 90 && score >= 80) {
        result = "Anda mendapatkan nilai B."
    } else if(score < 80 && score >= 70) {
        result = "Anda mendapatkan nilai C."
    } else if(score < 70 && score >= 60) {
        result = "Anda mendapatkan nilai D."
    }  else if(score < 60 && score >= 0) {
        result = "Anda mendapatkan nilai E."
    }
    return result;
} console.log(scoreChecker(10))