import "./ExpenseItem.css";//import css

const ExpenseItem = () => {
    //JS code
    const expenseDate = new Date(2021,2,28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.67;

    return (//return沒有()就只會return 一行
        //在div配置className，以使用css中的style
        <div className="expense-item">
            {/*object 要先變成string 再放入{}*/}
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item__description">
                {/*用{}放入JS code => string  */}
                <h2>{expenseTitle}</h2>
                {/*放入number的話 要用${} */}
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    )//因此要用()括起來
}
export default ExpenseItem;