import React from "react";
import ExpenseDate from "./ExpenseDate";//import separate component
import Card from "../UI/Card";
import "./ExpenseItem.css";
import {click} from "@testing-library/user-event/dist/click";
//import css

//app.js 會傳送一個object過來 => props
const ExpenseItem = (props) => {
    const clickHandler=()=>{//Event fn
        console.log("Clicked!")
    }
    return (
        //使用card作為html element
        <Card className="expense-item">
            {/*放入component*/}
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/*Event: onClick={...fn}*/}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;