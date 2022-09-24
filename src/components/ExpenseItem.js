import "./ExpenseItem.css";//import css

const ExpenseItem = () => {
    return (//return沒有()就只會return 一行
        //在div配置className，以使用css中的style
        <div className="expense-item">
            <div>Date</div>
            <div className="expense-item__description">
                <h2>Title</h2>
                <div className="expense-item__price">Amount</div>
            </div>
        </div>
    )//因此要用()括起來
}
export default ExpenseItem;