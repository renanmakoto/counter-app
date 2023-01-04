import React, { useContext } from 'react'
import { CounterContext } from '../CounterContext'

function Header(props) {
    const [counting] = useContext(CounterContext)
    return (
    <div className='headerDiv'>
        <h3>Counter</h3>
        <div>{counting}</div>
    </div>
    )
}

export default Header