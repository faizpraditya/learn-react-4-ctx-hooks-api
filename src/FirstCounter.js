import { Component } from "react"
import RootContext from "./context/RootContext"

class FirstCounter extends Component {
    render(){
        return(
            <RootContext.Consumer>
                {
                    // (value) => {
                    val => {
                        return(
                            <>
                            {val.state.globalNumber}
                            <br/>
                            FirstCounter
                            <button onClick={() => val.dispatch({type:"PLUS"})}>+</button>
                            <button onClick={() => val.dispatch({type:"MINUS"})}>-</button>
                            </>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default FirstCounter