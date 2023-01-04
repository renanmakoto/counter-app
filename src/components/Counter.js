import React, { useContext } from "react"
import { CounterContext } from "../CounterContext"


function Counter(props) {

    const [counting, setCounting] = useContext(CounterContext)

    return(
        <div>
            <div className="firstState">
                {counting}
            </div>
            <button onClick={() => {setCounting(previous =>  previous -1)}}>-</button>
            <button onClick={() => {setCounting(previous =>  previous +1)}}>+</button>
        </div>
    )
}

export default Counter