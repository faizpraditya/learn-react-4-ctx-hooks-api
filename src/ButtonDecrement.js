import { Button } from '@mui/material'
import { Remove } from '@mui/icons-material';

const ButtonDecrement = (props) => {
    const decrement = () => {
      if (props.number>0) {
        props.callback(props.number-1)
      }
    }
    return(
        <>
            <Button startIcon={<Remove/>} variant='contained' color='secondary' onClick={decrement}>Decrement</Button>
            {props.number}
        </>
    )
}

export default ButtonDecrement