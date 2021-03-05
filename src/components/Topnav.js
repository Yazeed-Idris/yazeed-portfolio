import Button from "./Button";

const Topnav = ({sections}) => {

    return (
        <div className='top-nav'>
            {sections.map((section) => {
                {return <Button text={section} color={'white'}/>}
            })}
        </div>
    )
}

export default Topnav