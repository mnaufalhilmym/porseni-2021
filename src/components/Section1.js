import Title from './Title/Title.js'
import Side1 from './Title/Side1.js'

const Section1 = (props) => {


    return (
        <div className = 'w-full'>
            <div className = 'mt-0 min-h-screen flex flex-col md:flex-row md:content-end md:justify-end relative'>
                <Title onClick = {props.onClick}/>
                <Side1 />
            </div>
            <div className = 'h-6'></div>
            <div className = 'md:hidden flex relative justify-center'>
                <img onClick = {props.onClick} className = 'z-20 cursor-pointer transform transition duration-300 active:scale-125' src = { ("images/Polygon 1.svg") } alt = "button to scroll" />
            </div>
        </div>
    )
}

export default Section1
