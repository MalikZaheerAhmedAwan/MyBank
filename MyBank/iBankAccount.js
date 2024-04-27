export var bank;
(function (bank) {
    class Customer {
        FirstName = "";
        LastName = "";
        Gender = "";
        Age = 0;
        MobileNumber = "";
        bankAccount = new BankAccount();
        CustomerInfo() {
            return `Name: ${this.FirstName} ${this.LastName} Age: ${this.Age} Gender: ${this.Gender} Mobile Number: ${this.MobileNumber} Account Balance : ${this.bankAccount.AccountBalance}`;
        }
    }
    bank.Customer = Customer;
    class BankAccount {
        _AccountBalance = 0;
        get AccountBalance() {
            return this._AccountBalance;
        }
        set AccountBalance(accountBalance) {
            this._AccountBalance = accountBalance;
        }
        constructor() {
            this.AccountBalance = 100;
        }
        Debit(dr) {
            let statement = "Sorry, you have insufficient balance!";
            if (dr > 0) {
                statement = "The amount you entered is wrong!";
                if (this.AccountBalance > dr) {
                    this.AccountBalance = this.AccountBalance - dr;
                    statement = "Transaction successfull New account balance is " + this._AccountBalance;
                }
                else {
                    statement = "You don't have enough money to do transaction";
                }
            }
            return statement;
        }
        Credit(cr) {
            let statement = "Transaction failed!";
            if (cr > 0) {
                this.AccountBalance = this.AccountBalance + cr;
                if (cr > 100) {
                    this.AccountBalance = this.AccountBalance - 1;
                }
                statement = "Your account has been credited successfully!";
            }
            return statement;
        }
    }
})(bank || (bank = {}));
