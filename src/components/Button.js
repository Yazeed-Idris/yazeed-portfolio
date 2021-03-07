import PropTypes from 'prop-types'

const Button = ({text}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <div>
            <button className="nav-btn" onClick={onClick}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'f2f2f2',
    text: 'Click',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button;