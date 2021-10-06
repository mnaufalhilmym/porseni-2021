const Title = (props) => {
    return (
        <div className = 'z-30 w-5/12 h-full items-center mt-56 mr-20 relative' >
            <div className = 'flex items-stretch justify-end content-end text-6xl font-sansPro'>
                coming soon
            </div>
            <div className = 'flex items-stretch justify-end content-end'>
                Jejepangan
            </div>
            <div className = 'flex items-stretch justify-end content-end text-oneten font-nuku'>
                PORSENIGAMA
            </div>
            <div className = 'h-3'></div>
            <div className = 'flex justify-end'>
                <img className = 'right-0 transform scale-90' src = { ("images/countdown.svg") } /> {/* placeholder for countdown */}
                {/* <div className = 'w-8'></div> */}
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
