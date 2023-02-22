// "use strict";
// 1
// function validateEmail(email){
//     return true
// }

// 2
function validateEmail(email) {
  if (email === '') return false
  if (typeof email !== 'string') return false
  if (!email.split('').includes('@') || email.split('')[0] === '@') return false


//2
  if (email.length < 5) return false 

  //3
  if ((email.split('@').length - 1) > 1) return false   
  //4
  if (email.lastIndexOf('@') > email.lastIndexOf('.')) return false   
  
    if (email.includes('.@')) return false    
    return true
}