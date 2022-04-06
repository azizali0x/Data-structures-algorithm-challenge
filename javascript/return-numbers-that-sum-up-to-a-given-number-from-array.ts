//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.


let arr : Array<number> = [1,2,3,4,5,6]

let sum : number = 20

const  number_sum = (arr : Array<number>, num : number) => {
    let sum_nums : Array<string> = []

    arr.forEach( (number_real : number) => {
        arr.forEach((number_copy : number) => {
            if( number_real + number_copy === num){
                sum_nums.push(`${number_copy} + ${number_real} =${num}` )
            }
        })
    })
    if(sum_nums.length === 0){
        sum_nums.push("I couldn't find  possible sums (^ _ ^)")
    }
    return sum_nums
}

let x = number_sum(arr,sum)
console.log(x)