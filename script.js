 let email = "apple.pie@example.com";
 
 function maskEmail(email){

  let eta = email.indexOf("@") 
  
  let result1= email.slice(eta)
  let mail=email.slice(1,eta-1)
  let mailFirstLetter=email.slice(0,1)
  let mailLastLetter=email.slice(eta-1,eta)
  let masker="*".repeat(mail.length);
    let finishedResult=mailFirstLetter+mail.replace(mail,masker)+mailLastLetter+result1;
   return finishedResult
   
  
   
   
   
  
 
 }
 maskEmail(email)
 console.log(maskEmail(email))