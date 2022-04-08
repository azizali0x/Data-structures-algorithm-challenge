
//return a factorial of any given number

function factorial( num : number){
    let counter :number = 0

    let facto : number = 0
    for(let i = 0;i <= num; i++ ){
        if(facto == 0){
            facto = i
        }else{
            facto *= i
        }
    }
    return facto
}

factorial(4)