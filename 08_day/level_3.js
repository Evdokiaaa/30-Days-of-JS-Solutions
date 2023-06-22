let personAccount = {
  firstName: "Alex",
  lastName: "Liosos",
  income: {
    freelancing: 6000,
    menialLabour: 2000,
  },
  expenses: {
    data: 600,
    food: 1000,
    transport: 500,
  },
  totalIncome() {
    let income = 0;
    let values = Object.values(this.income);
    for (let i = 0; i < values.length; i++) {
      income += values[i];
    }
    return income;
  },
  totalExpense() {
    let expense = 0;
    let values = Object.values(this.expense);
    for (let i = 0; i < values.length; i++) {
      expense += values[i];
    }
    return expense;
  },
  accountInfo() {
    return;
    `name:${this.name} ${this.lastName}\n
          incomes:${Object.entries(this.income)}
          expenses:${Object.entries(this.expenses)}
          totalIncome: ${this.totalIncome()}
          totalExpenses: ${this.totalExpenses()}
          accountBalance: ${this.accountBalance()}
      `;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  addIncome(source, amount) {
    if (typeof amount === "number") {
      if (this.income[source]) {
        this.income[source] += amount;
      } else {
        this.income[source] = amount;
      }
    } else {
      console.log("Amount should be a number");
    }
  },
  addExpense(name, amount) {
    if (typeof amount === "number") {
      if (this.expenses[name]) {
        this.expenses[name] += amount;
      } else {
        this.expenses[name] = amount;
      }
    } else {
      console.log("Amount should be a number");
    }
  },
};

//2

const users2 = [
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

const signUp = (users, username, email, password) => {
  const exists = users.some(
    (user) =>
      user.username === username &&
      user.email === email &&
      user.password === password
  );

  if (exists) {
    console.log("This user already exists");
    return false;
  } else {
    const date = new Date();
    const chars = "0123456789qwertyuiopasdfghjlzxcvbnm";
    let id = "";
    for (let i = 0; i < 6; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    const newUser = {
      _id: id,
      username: username,
      email: email,
      password: password,
      createdAt: date.toLocaleString(),
      isLoggedIn: false,
    };
    users.push(newUser);
    console.log("User successfully added");
    return true;
  }
};

console.log(signUp(users2, "Alex", "email@gmail.com", "1234"));
console.log(users2);

const signIn = (username, password) => {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username.toLowerCase() === username.toLowerCase() &&
      users[0].password === password
    ) {
      return users[i];
    } else {
      return "Wrong username or password";
    }
  }
};

//PRODUCT

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

const rateProduct = (name, rate) => {
  products.forEach((product) => {
    if (product.name.toLowerCase().includes(name)) {
      let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
      let id = [];
      for (let i = 0; i < 6; i++) {
        id.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      id = id.join("");
      product.ratings.push({
        userId: id,
        rate: rate,
      });
      console.log("filter");
    } else {
      console.log("no product to rate");
    }
  });
};

const avgRating = (name) => {
  let avg = 0;
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    if (name.toLowerCase() === products[i].name.toLowerCase()) {
      products[i].ratings.rate.forEach((rating) => {
        count++;
        avg += rating;
      });
    }
  }
  avg = avg / count;
};

const likeProduct = (name) => {
  for (let i = 0; i < products.length; i++) {
    if (name.toLowerCase() === products[i].name.toLowerCase()) {
      if (!products[i].likes) {
        console.log(like);
        let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
        let id = [];
        for (let i = 0; i < 6; i++) {
          id.push(chars[Math.floor(Math.random() * chars.length)]);
        }
        id = id.join("");
        products[i].likes.push(id);
      } else {
        console.log("product has been liked");
      }
    } else {
      console.log("no product available");
    }
  }
};
