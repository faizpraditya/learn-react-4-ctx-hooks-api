import { useDispatch, useSelector } from "react-redux"
import ActionType from "../redux/ActionType"

const DecrementButton = () => {

    const dispatch = useDispatch()
    const counter = useSelector((state) => state.nilai)

    return (
        <>
            {counter}
            <button
                onClick={() => dispatch (
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