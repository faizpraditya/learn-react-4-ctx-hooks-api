import { useDispatch, useSelector } from "react-redux"
import ActionType from "../redux/ActionType"

const IncrementButton = () => {

    const dispatch = useDispatch()
    const counter = useSelector((state) => state.nilai)

    return (
        <>
            {counter}
            <button
                onClick={() => dispatch (
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