Describe: BankAccount()
Test: "It should have a user name property."
Code: function BankAccount(userName)
Expected Output: BankAccount(); {userName}

Test: "It should return the right user name when a user name is entered."
Code: let userName = new BankAccount("Joey")
Expected Output: BankAccount {userName: "Joey"}

Test: "It should have a first deposit property, and that property should display as an integer."
Code: let newAccount = new BankAccount("Joey", "100");
Expected Output: BankAccount {userName: "Joey", firstDeposit: 100}
