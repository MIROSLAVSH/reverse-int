// module.exports = function reverse (n) {
  
// }

// const reverseNum = n => parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)
// module.exports = function reverseNum(n) {
//     return (
//         parseFloat(
//             n
//                 .toString()
//                 .split('')
//                 .reverse()
//                 .join('')
//         ) * Math.sign(n)
//     )
// }
// return reverseNum()

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
module.exports = function reversedNum(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
    
}
return reversedNum
