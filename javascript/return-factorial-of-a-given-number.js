"use strict";
//return a factorial of any given number
function factorial(num) {
    let counter = 0;
    let facto = 0;
    for (let i = 0; i <= num; i++) {
        if (facto == 0) {
            facto = i;
        }
        else {
            facto *= i;
        }
    }
    return facto;
}
factorial(4);
