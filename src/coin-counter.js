export default function coinCounter(amount, coins) {
  let coins = { };
  if (typeof amount != 'number' || amount < 0) {
    return;
  }
  if(amount > .25) {
    const q = parseInt(amount/.25);
    coins['quarters'] = q;
    console.log(coins)
    return coinCounter((amount - (q*.25)), coins)
  } else if(amount > .10) {
    const d = parseInt(amount/.10);
    coins['dimes'] = d;
    console.log(coins)
    return coinCounter((amount - (d*.10)), coins)
  } else if(amount > .05) {
    const n = parseInt(amount/.05);
    coins['nickels'] = n;
    console.log(coins)
    return coinCounter((amount - (n*.05)), coins)
  } else if(amount > 0) {
    const p = parseInt(amount/.01)
    coins['pennies'] = p
    console.log(coins)
    return coinCounter((amount - (p*.01)), coins)
  } else {
    return coins;
  }
}