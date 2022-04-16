import { useState } from 'react'
import { StyleBtn } from './styles'

const CheckableButton = ({ children }) => {
    const [checked, setChecked] = useState(false)

    const toggleCheck = () => {
        setChecked(!checked)
    }

    return (
        <StyleBtn checked={checked} oClick={toggleCheck}>{
            checked
            ? 'Checked'
            : 'Not checked'
        }</StyleBtn>
    )
}