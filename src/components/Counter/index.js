import { useState } from 'react'
import PropTypes from 'prop-types'

const Counter = ({step, startValue }) => {

    const [count, setCount] = useState(startValue)

    const decrement = () => {
        setCount(count - step)
    }

    const increment = () => {
        setCount(count + step)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <div>Contador</div>
            <div>Últimos:</div>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter