// palindrome is when you write something it read it the same in front and back

var isPalindrome = function(x) {
    if (x < 0) {
        return false; // negative numbers are not palindromes
    }
    
    const str = x.toString(); // convert the number to a string
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // characters don't match, so it's not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // all characters match, so it's a palindrome
};