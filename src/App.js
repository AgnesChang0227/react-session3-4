//import other components
import ExpenseItem from "./components/ExpenseItem";

//Main component
function App(){
  return(
      //JSX => JS XML => HTML(XML) in JS
      <div>
        <h2>Let's get started!</h2>
          {/*放置import的components*/}
          <ExpenseItem/>
      </div>
  )
}

export default App;