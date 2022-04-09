"use strict";
// rearrange array i ascending order
Object.defineProperty(exports, "__esModule", { value: true });
exports.rm_duplicate = void 0;
let arr_num = [2, 3, 1, 4, 5];
const rm_duplicate = (arr_val) => {
    let arr_val_cp = arr_val;
    let arrange = [];
    let prev_ = null;
    let x = 0;
    while (arrange.length !== arr_val.length) {
        arr_val_cp.forEach(num => {
            if (prev_ === null) {
                prev_ = num;
            }
            else {
                if (num < prev_) {
                    prev_ = num;
                }
            }
        });
        arr_val_cp.splice(arr_val_cp.indexOf(prev_), 1);
        arrange.push(prev_);
    }
    return arrange;
};
exports.rm_duplicate = rm_duplicate;
console.log((0, exports.rm_duplicate)(arr_num));
