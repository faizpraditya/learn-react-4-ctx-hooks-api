import { Button } from '@mui/material'
import { Add } from '@mui/icons-material';

const ButtonIncrement = (props) => {
    const increment = () => {
        props.callback(props.number+1)
    }
    return(
        <>
            {props.number}
            <Button startIcon={<Add/>} variant='contained' onClick={increment}>Increment</Button>
        </>
    )
}

export default ButtonIncrement