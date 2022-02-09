import { Component } from "react"
import RootContext from "./context/RootContext"

class SecondCounter extends Component {
    render(){
        return(
            <RootContext.Consumer>
                {
                    val => {
                        return(
                            <>
                            {val.state.globalNumber}<br/>
                            SecondCounter
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

export default SecondCounter