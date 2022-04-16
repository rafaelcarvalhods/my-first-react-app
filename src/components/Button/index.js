import PropTypes from "prop-types"

const Button = ({text, onClick}) => (
    <>
        <button onClick={onClick}>
            {text}</button>
        <button onClick={onClick}>
        {text}</button>
    </>
    // ou

    // const {text} = props
    // return <button>{text}</button>

    // ou

    // "return <button> {text}</button>" - Obs.: Nesse caso o argumento a ser passado fica "const Button = ({tex})" ao invés do "props" 
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button