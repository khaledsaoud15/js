// const dog = {};

// console.log(dog);

// dog.name = "Rex";
// dog.color = "brown";
// dog.age = "6 months";
// dog.legs = "4 legs";
// dog.bark = function () {
//   return "woof woof";
// };

// console.log(dog);

// dog.breed = "bulldog";
// dog.getInfo = function () {
//   return "this dog is " + dog.name + " and he is " + dog.age + " Years old";
// };

// console.log(dog);
// console.log(dog.getInfo());
// console.log(dog.bark("spike"));

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// function getTheHighestSkill(users) {
//   let count = 0;
//   let username = "";
//   let HighestUsers = "";

//   for (let user in users) {
//     if (users[user].skills.length > count) {
//       username = user;
//       HighestUsers = users[user];
//       count = users[user].skills.length;
//     }
//   }
//   return { count: count, username: username, highestUsers: HighestUsers };
// }

// console.log(getTheHighestSkill(users));

// function getInfo(users) {
//   let clients = [];
//   let HighestUsers = [];

//   for (let user in users) {
//     if (users[user].isLoggedIn === true && users[user].points >= 50) {
//       clients.push(user);
//       HighestUsers.push(users[user]);
//     }
//   }
//   return { users: clients.join(" "), user: HighestUsers };
// }

// console.log(getInfo(users));

// function GetMern(users) {
//   let mernStack = [];
//   for (let user in users) {
//     if (
//       users[user].skills.includes("MongoDB") &&
//       users[user].skills.includes("Express") &&
//       users[user].skills.includes("Node") &&
//       users[user].skills.includes("React")
//     ) {
//       mernStack.push(users[user]);
//     }
//   }
//   return mernStack;
// }

// console.log(GetMern(users));

// function addUser(users, newUser, name) {
//   users[name] = newUser;
//   return users;
// }

// console.log(
//   addUser(
//     users,
//     {
//       email: "khaledi@gmail.com",
//       skills: ["HTML", "CSS", "JavaScript", "react"],
//       age: 20,
//       isLoggedIn: false,
//       points: 100,
//     },
//     "khaled"
//   )
// );
// console.log(users);

const Logs = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// SIgnUp

function signUp(users, user) {
  // check if the user already exists
  const userExists = users.find((u) => u.email === user.email);

  if (userExists) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  // if user doesn't exist, add new user
  const newUser = {
    _id: Math.random().toString(36).substr(2, 9),
    username: user.username,
    email: user.email,
    password: user.password,
    createdAt: new Date().toLocaleString(),
  };
  users.push(newUser);
  return {
    success: true,
    user: newUser,
  };
}

console.log(
  signUp(Logs, {
    username: "khaled",
    email: "khaledsaoud@gmail.com",
    password: "***************",
  })
);
console.log(
  signUp(Logs, {
    username: "khaled",
    email: "khaledsaoud@gmail.com",
    password: "***************",
  })
);

console.log(Logs);

// Login

function signIn(users, user) {
  // check if the user exists
  const userExists = users.find((u) => u.email === user.email);

  // if user doesnt exist
  if (!userExists) {
    return {
      success: false,
      message: "User does not exist",
    };
  }
  // if user exists, check if password is correct
  if (userExists.password === user.password) {
    return {
      success: true,
      user: userExists,
      message: "User logged in",
    };
  }
  return {
    success: false,
    message: "Password is incorrect",
  };
}

console.log(
  signIn(Logs, {
    username: "khaled",
    email: "khaledsaoud@gmail.com",
    password: "***************",
  })
);
