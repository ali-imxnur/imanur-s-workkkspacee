function checkPalindrome(str){
    let name='';
    for( i=str.length-1; i>=0; i--)
    {
           name=name+str[i];
    }
    if(name===str)
    {
           console.log('YES THIS IS PALINDROME')
    }
    else
    {
            console.log('NO THIS IS NOT PALINDROME')
    }
}
checkPalindrome('MADAM');
checkPalindrome('TEST');
checkPalindrome('ABBA')
//
//