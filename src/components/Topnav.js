import Button from "./Button";

const Topnav = () => {

    return (
        <div className='top-nav'>
            <Button text={'Home'}/>
            <Button text={'Projects'}/>
            <Button text={'Courses'}/>
            <Button text={'Contact Me'}/>
            <Button text={'Hire Me'}/>
        </div>
    )
}

export default Topnav