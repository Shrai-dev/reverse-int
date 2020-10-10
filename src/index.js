module.exports = function reverse(n) {
    let str = n.toString();
    let re = '-';
    return str.split('').reverse().join('').replace(re, '');
    
}
