import Title from './Title.js'
import Side1 from './Side1.js'

const Section1 = (props) => {


    return (
        <div className = 'w-full'>
            <dir className = 'mt-0 h-full flex content-end justify-end relative'>
                <Title onClick = {props.onClick}/>
                <Side1 />
            </dir>
        </div>
    )
}

export default Section1
