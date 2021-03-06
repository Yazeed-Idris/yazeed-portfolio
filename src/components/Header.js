import Button from './Button';
import * as PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='red' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header