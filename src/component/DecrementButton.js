import { useContext } from "react"
import { RootContext } from "../App"
import ActionType from "../redux/ActionType"

const DecrementButton = () => {

    const data = useContext(RootContext)

    // console.log(data)

    return (
        <>
            {data.nilaiz.nilai}
            <button
                onClick={() => data.dispatch (
                    {
                        type: ActionType.MINUS
                    }
                )}
            >
                -
            </button>
        </>
    )
}

export default DecrementButton