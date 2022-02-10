import { useContext } from "react"
import { RootContext } from "../App"
import ActionType from "../redux/ActionType"

const IncrementButton = () => {

    const data = useContext(RootContext)

    // console.log(data)

    return (
        <>
            {data.nilaiz.nilai}
            <button
                onClick={() => data.dispatch (
                    {
                        type: ActionType.PLUS
                    }
                )}
            >
                +
            </button>
        </>
    )
}

export default IncrementButton