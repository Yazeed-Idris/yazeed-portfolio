import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}}><a href="https://google.com">{text}</a></button>
        </div>
    )
}

Button.defaultProps = {
    color: 'white',
    text: 'Add',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button;