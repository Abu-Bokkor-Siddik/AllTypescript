"use strict";
// function non premative 
// normal function and deaful value
function test(test1, test2 = 40) {
    return test1 + test2;
}
test(3, 5);
// arrow function 
const testArrow = (testa, testb) => {
    return testa + testb;
};
testArrow(4, 6);
// object --> function ---> method 
const mytaka = {
    name: 'siddik',
    blance: 0,
    add(blances) {
        return this.blance + blances;
    }
};
// map oparation 
let c = [2, 3, 4, 5, 6];
const values = c.map((elem) => elem * elem);
