const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '17/05/2019 9:00 AM',
      isLoggedIn: false
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '17/05/2019 9:30 AM',
      isLoggedIn: true
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '17/05/2019 9:45 AM',
      isLoggedIn: true
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '17/05/2019 9:50 AM',
      isLoggedIn: false
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '17/05/2019 10:00 AM',
      isLoggedIn: false
    }
  ];

const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [{ userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 },{userId:'Afaf',rate:2}],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];
  const newUser = {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '17/05/2019 9:00 AM',
    isLoggedIn: false
  }

  const signUp = (newUser,users)=>{
    const {email} = newUser
    for(const user of users){
      if(user["email"]==email){
        return "an email aleady exists please log in"
      }

    }
    users.push(newUser)
    return "you have succefully signed in"
  }

  console.log(signUp(newUser, users))
  

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
  console.log(signIn('martha@martha.com','123222',users))
  /* =============================== QUESTION 8 =============================================
      Imagine you are getting the above users collection from a MongoDB database.
      a. Create a function called signUp which allows user to add to the collection. 
      If user exists, inform the user that he has already an account.
      b. Create a function called signIn which allows user to sign in to the application
    =========================================================================================== */



/* =============================== QUESTION 9 =============================================
    The products array has three elements and each of them has six properties.
    a. Create a function called rateProduct which rates the product
    b. Create a function called averageRating which calculate the average rating of a product
  =========================================================================================== */

  const rateProduct = (userId, productId, rating, products)=>{
    let found = false
    for(let i=0;i<products.length;i++){
      if (products[i]._id == productId) {
        for(let j=0;j<products[i].ratings.length;j++){
          if(products[i].ratings[j].userId == userId){
            products[i].ratings[j].rate = rating
            found = true
            return "updated"
            
          }
        }
        if(!found){
          products[i].ratings.push({userId:userId, rate:rating})
          return"added"
        }
        }
    }
    return "product not found"
  }

  console.log( rateProduct('fg12cy', 'hedfcg', 3.5, products))
console.log(  rateProduct('fg12cy', 'hedfcgs', 10, products))
console.log(rateProduct("fg12cy", "aegfal", 1, products))
console.log(products)

//a

// b
function averageRating(products) {
  for (let i = 0; i < products.length; i++) {
    let sum=0;
    let average=0;
    if (products[i].ratings.length>0) {
      for (let j = 0; j < products[i].ratings.length; j++) {
      sum+=products[i].ratings[j].rate
      }
      average=sum/(products[i].ratings.length)
    }
    console.log({id:products[i]._id,average:average});
  }

}

console.log(averageRating(products));
/* =============================== QUESTION 10 =============================================
  Create a function called likeProduct.
  This function will helps to like to the product if it is not liked and remove like if it was liked.
  =========================================================================================== */
  

  function likeProduct(userid,products,productsid){
    for (let i = 0; i< products.length; i++) {
      // console.log("parcourirr products");
      if (products[i]._id===productsid) {
        console.log("equal");
        let element=products[i].likes;
        console.log(element);

        if (element.length==0) {
          products[i].likes.push(userid);
          return("added");
        }
        else{
          for (let j = 0; j < element.length; j++) {
            if (userid===products[i].likes[j]) {
              products[i].likes.splice(products[i].likes[j],1)
              return("removed");
            
            }
    
            else {
              products[i].likes.push(userid);
              return("added");
            }
          }

        }
      
    
      }  
      }
   
      }

      console.log(likeProduct('brahim',products,'eedfcf'));
      console.log(likeProduct('fg12cy',products,'aegfal'));
      console.log(products);