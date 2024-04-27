
export namespace bank 
{

export class Customer {
    public FirstName : string="";
    public LastName : string="";
    public Gender : string="";
    public Age : number=0;
    public MobileNumber : string="";
    public bankAccount = new BankAccount() ;
    public CustomerInfo () : string 
    {
        return `Name: ${this.FirstName} ${this.LastName} Age: ${this.Age} Gender: ${this.Gender} Mobile Number: ${this.MobileNumber} Account Balance : ${this.bankAccount.AccountBalance }`;
    }
    }


interface IBankAccount 
{
    Debit (dr: number): string ;
    Credit (cr: number): string ;
}

class BankAccount implements IBankAccount {
private _AccountBalance: number=0;

    public get AccountBalance() {
        return this._AccountBalance;
        }
        public set AccountBalance(accountBalance: number)
        {
            this._AccountBalance=accountBalance;
        }

        public constructor (){
            this.AccountBalance=100;
        }

    public Debit(dr: number): string {
        let statement: string="Sorry, you have insufficient balance!"
        if (dr>0)
        {
            statement="The amount you entered is wrong!";
            if (this.AccountBalance>dr)
            {
                this.AccountBalance=this.AccountBalance-dr;
                statement="Transaction successfull New account balance is "+this._AccountBalance;
            }
            else
            {
                statement="You don't have enough money to do transaction";

            }
        }
        return statement;
}
public Credit(cr: number): string {
    let statement: string="Transaction failed!"
    if (cr>0)
    {
        this.AccountBalance=this.AccountBalance+cr;
         if (cr>100)
        {

            this.AccountBalance=this.AccountBalance-1;

        }
            statement="Your account has been credited successfully!";

    }

    return statement;    
}
}

}