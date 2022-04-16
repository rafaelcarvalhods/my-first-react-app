import PropTypes from 'prop-types';

const Button2 = (props) => (
        <button onClick={
            props.onClick
    }>
        {props.text}
    </button>
)

Button2.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button2;