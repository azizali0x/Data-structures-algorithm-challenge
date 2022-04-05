const arr_dup : Array<number> = [1,2,3,4,5,6,3,5,6,6,4,3,2,1,4,6,6,4,6,7,4,3,]


let duplicate_remover = (arr : Array<number>)=>{
    let non_duplicat : typeof arr = []
    
    arr.forEach((num : any)=>{
        if(non_duplicat.length === 0){
            non_duplicat.push(num)
        }else{
            if(!non_duplicat.includes(num)){
                non_duplicat.push(num)
            }
        }
    })
    return non_duplicat
}

console.log(duplicate_remover(arr_dup))