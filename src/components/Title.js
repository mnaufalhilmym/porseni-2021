// import {FaCaretDown} from 'react-icons/fa'
// <FaCaretDown onClick = {props.onClick} className = 'z-20 cursor-pointer' size = 'lg'/>

const Title = (props) => {
    return (
        <div className = 'z-20 w-5/12 h-1/3 items-center mt-72 relative' >
            <div className = 'flex items-stretch justify-end content-end text-krem text-7xl font-sansPro'>
                coming soon
                <div className = 'w-1/12'></div>
            </div>
            <div className = 'h-2'></div>
            <div className = 'flex items-stretch justify-end relative'>
                <img className = 'w-2/5 h-2/5 transform scale-90' src = { ("images/Jejepangan Horizontal.svg") } />
                <div className = 'w-14'></div>
            </div>
            {/* <div className = 'h-3'></div> */}
            <div className = 'flex items-stretch justify-start relative'>
                <div className = 'w-6'></div>
                <img className = 'right-0 transform scale-110' src = { ("images/porsenigama.svg") } alt = 'Logo Porsenigama 2021' />  
            </div>
            <div className = 'h-4'></div>
            <div className = 'flex items-stretch justify-end relative'>
                <img className = 'right-0 transform scale-90' src = { ("images/countdown.svg") } /> {/* placeholder countdown */}
                <div className = 'w-8'></div>
            </div>
            <div className = 'h-24 w-52'></div>
            <div className = 'flex relative'>
                <div className = 'w-1/2'></div>
                <img onClick = {props.onClick} className = 'z-20 cursor-pointer animate-pulse' src = { ("images/Polygon 1.svg") } alt = "button to scroll" />
            </div>
        </div>            
    )
}

export default Title
