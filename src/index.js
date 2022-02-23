// module.exports = function reverse (n) {
  
// }

const reversedNum = num => parseFloat(num.toString().split().reverse().join()) * Math.sign(Math.abs(num))
 module.exports = function reversedNum(num) {
     return (
        parseFloat(
                num
                 .toString()
                .split('')
                .reverse()
                .join('')
         ) * Math.sign(Math.abs(num)) 
     )

}
return reversedNum


