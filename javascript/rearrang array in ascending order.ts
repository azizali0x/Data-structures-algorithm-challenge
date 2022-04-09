// rearrange array i ascending order

let arr_num : Array<number> = [2,3,1,4,5]

export const rm_duplicate = (arr_val : Array<number>) => {
    let arr_val_cp : typeof arr_val = arr_val
    let arrange : typeof arr_val = []
    let prev_ : any = null
    let x = 0
    while(arrange.length !== arr_val.length){
        arr_val_cp.forEach(num=>{
            if(prev_ === null){
                prev_ = num
            }else{
                if(num < prev_){
                    prev_ = num
                }
            }
        })
        arr_val_cp.splice(arr_val_cp.indexOf(prev_),1)
        arrange.push(prev_)
    }
    return arrange
}


console.log(rm_duplicate(arr_num))