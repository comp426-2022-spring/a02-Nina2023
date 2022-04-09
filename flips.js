import {coinFlips, countFlips} from "./modules/coin.mjs";
var args = process.argv.slice(2);
let side = coinFlips(args[2]);
let amount = countFlips(side);

if (args[2] == null){
    side = coinFlips(1);
    if (side == 'tails'){
        amount= {tails:1};
    }
    else{
        amount = {heads:1};
    }
}

console.info(side);
console.log(amount);