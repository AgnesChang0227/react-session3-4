import "./ExpenseItem.css";//import css
import ExpenseDate from "./ExpenseDate";//import separate component

//app.js 會傳送一個object過來 => props
const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            {/*放入component*/}
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;