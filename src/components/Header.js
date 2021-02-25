import PropTypes from 'prop-types'
import Button from './Button'

// destructuring the (props) into ({ title })
// then no need to use props.title 
const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}></Button>
        </header>
    )
}

//creating a default props named title
Header.defaultProps = {
    title: 'Task Tracker',
}

// adding a default prop type which is string
// finally making it as required so that
// if there is no prop types then will display error in console 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// to add some css using object
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
