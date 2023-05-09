
const names = [
    {fName: 'Chris'},
    {fName: 'Anna'},
    {fName: 'Emma'},
    {fName: 'Nico'}
];

const numbers = [2,4,6,54,23,98,76];

function isEven(num){
    return num % 2 === 0;
}



function extractValue(arr, key){
    return arr.reduce(function(accum, keyVal){
        accum.push(keyVal[key]);
        return accum;
    }, []);
};



function vowelCount(str){
    let vows = 'aeiou';
    let newArr = str.split('');
    return newArr.reduce(function(accum, keyVal){
        if(vows.indexOf(keyVal) !== -1){
            if(accum[keyVal]){
                accum[keyVal] += 1;
            } else{
                accum[keyVal]  = 1;
            }
        }
        return accum;
    }, {});
};



function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, keyVal, idx){
        accum[idx][key] = value;
        return accum;
    }, arr);
};



function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}
