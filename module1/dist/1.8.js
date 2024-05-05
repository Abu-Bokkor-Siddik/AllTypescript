"use strict";
//  Destructuring
// 1 object destructuring 
const user = {
    id: 223,
    name: {
        fristName: 'Abu',
        middleName: 'bokor',
        lastName: 'siddik'
    },
    contact: '028388888',
    address: 'savar'
};
// comment koratake name alias bole
// {id,name:{lastName:string}
const { id, name: { lastName } } = user;
// array destructuring 
const dist = [2, 4, 5, 67, 8];
const [a, g, h, t, u,] = dist;
const dist2 = ['hello', 'just', 'hmm', 'jii'];
const [, just, ...hmm] = dist2;
