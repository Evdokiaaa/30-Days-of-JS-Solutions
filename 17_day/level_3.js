//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
  firstname: "",
  lastname: "",
  incomes: [],
  expenses: [],

  get totalIncome() {
    let total = 0;
    for (const amount of this.incomes.map((item) => item.amount)) {
      total += amount;
    }
    return total;
  },
  get totalExpense() {
    let total = 0;
    for (const amount of this.expenses.map((item) => item.amount)) {
      total += amount;
    }
    return total;
  },
  accountInfo() {
    return `First name:${this.firstname}\nLast name: ${
      this.lastname
    } \n Incomes: ${this.incomes.map(
      (item) => item.desc
    )}\n Expenses: ${this.expenses.map(
      (item) => item.desc
    )} \n TotalBalance:${this.accountBalance()}`;
  },
  addIncome(desc, amount) {
    this.incomes.push({ desc: desc, amount: amount });
  },
  addExpense(desc, amount) {
    this.expenses.push({ desc: desc, amount: amount });
  },
  accountBalance() {
    return this.totalIncome - this.totalExpense;
  },
};
// Example

personAccount.firstname = "John";
personAccount.lastname = "Doe";

personAccount.addIncome("Salary", 1000);
personAccount.addIncome("Bonus", 200);

personAccount.addExpense("Rent", 400);
personAccount.addExpense("Groceries", 100);

console.log(personAccount.accountInfo());
