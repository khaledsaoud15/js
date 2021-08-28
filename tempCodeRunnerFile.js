
  

  const signIn = (email,password ,users)=>{
    for(let i=0;i<users.length;i++){
    // console.log(users[i]);
      if((users[i]['email']=== email) && ( users[i]['password'] === password)){
        return "succefully loged in"
      }
    }
    return "Email or Password incoreccet"
  }
  console.log(signIn("khaledsaoud@gmail.com",'123123' ,users))