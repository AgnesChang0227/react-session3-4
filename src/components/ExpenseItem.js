import "./ExpenseItem.css";//import css

//app.js 會傳送一個object過來 => props
const ExpenseItem = (props) => {
    return (//return沒有()就只會return 一行
        //在div配置className，以使用css中的style
        <div className="expense-item">
            {/*在{}中放入props.attribute*/}
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                {/*用{}放入JS code => string  */}
                <h2>{props.title}</h2>
                {/*放入number的話 要用${} */}
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )//因此要用()括起來
}
export default ExpenseItem;