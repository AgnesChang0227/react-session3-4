import React,{useState} from "react";//import useState

import ExpenseDate from "./ExpenseDate";//import separate component
import Card from "../UI/Card";
import "./ExpenseItem.css";//import css

//app.js 會傳送一個object過來 => props
const ExpenseItem = (props) => {
    //hooks，只能在react component fn 內 call
    //useState: 當state改變時，refresh這個component
    //語法：const [state name, fn] = useState(value)
    const [title,setTitle] = useState(props.title);
    const clickHandler=()=>{//Event fn
        setTitle("updated!");//update 新value
    }

    return (
        //使用card作為html element
        <Card className="expense-item">
            {/*放入component*/}
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/*Event: onClick={...fn}*/}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;