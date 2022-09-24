import "./Card.css"
//wrapper component => 含有css包裝的 component
const Card = (props) => {
    //將共用的style變成 component => html
    const classes = "card "+props.className;
    return (
        //classes: 共用和所有的className
        //props.children: 把props的內容放進去
        <div className={classes}>{props.children}</div>
    )
}
export default Card;