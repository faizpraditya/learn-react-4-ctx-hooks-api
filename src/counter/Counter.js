import {useState} from "react";

const Counter = ({initial=0})=> {
    const [count, setCount] = useState(initial);
    const [error, setError] = useState('')

    const handleIncrement = () => {
        if (count >= 3) {
            setError('Tidak boleh lebih dari 3')
        } else {
            setCount(count+1)
        }
    }
    const handleDecrement = () => {
        if (count <= 0) {
            setError('Tidak boleh negatif')
        } else {
            setCount(count-1)
        }
    }
    return (
        <div>
            Counter = <span id="value">{count}</span><br/>
            <button id="increment" onClick={handleIncrement}>Tambah</button>
            <button id="decrement" onClick={handleDecrement}>Kurang</button>
            <span>{error}</span>
        </div>
    )
}

export default Counter;