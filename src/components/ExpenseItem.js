
import ExpenseDate from "./ExpenseDate";//import separate component
import Card from "./Card";
import "./ExpenseItem.css";//import css

//app.js 會傳送一個object過來 => props
const ExpenseItem = (props) => {
    return (
        //使用card作為html element
        <Card className="expense-item">
            {/*放入component*/}
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;