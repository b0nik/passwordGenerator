function generatePassword(symb) {
    const symbols=symb;
    return function(len){
        const length = len||9;
           let retVal = "";
        for (let i = 0, n = symbols.length; i < length; ++i) {
            retVal += symbols[Math.floor(Math.random() * n)];
        }
        return retVal;
    }
}

const symbols_En = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','Y','V','W','X','Y','Z','_','1','2','3','4','5','6','7','8','9','0'];
const symbols_Ru=['1','2','3','4','5','6','7','8','9','0'];

var enPassword=generatePassword(symbols_En);
var numPassword=generatePassword(symbols_Ru);

console.log(enPassword(8));
console.log(enPassword(10));
console.log(numPassword(6));

