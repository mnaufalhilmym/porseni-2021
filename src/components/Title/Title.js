import Countdown from './Countdown'

const Title = (props) => {
    return (
        <div className = 'z-30 md:w-5/12 h-full items-center md:mt-56 md:mr-20 relative' >
            <div className = 'h-44 md:h-0'></div>
            <div className = 'flex items-stretch justify-center md:justify-end content-end text-4xl md:text-6xl text-krem font-sansPro cursor-default'>
                coming soon
            </div>
            <div className = 'h-2 md:h-4'></div>
            <div className = 'flex items-stretch justify-center md:justify-end content-end text-xl md:text-4xl text-krem font-sansPro cursor-default'>
                カミング・スーン
            </div>
            <div className = 'flex items-stretch justify-center md:justify-end content-end text-6xl md:text-oneten text-krem font-nuku cursor-default' style = {{ "-webkit-text-stroke": "1.5px #E62434" }}> 
                <huruf style = {{
                        "text-shadow": [
                        "6px 6px 0 #E62434",
                        "6px 2px 0 #E62434",
                        "3px 8px 0 #E62434",
                        "2px 8px 0 #E62434",
                    ],
                }}>PO</huruf><huruf style = {{
                        "text-shadow": [
                        "6px 6px 0 #E62434",
                        "6px 2px 0 #E62434",
                        "6px 3px 0 #E62434",
                        "6px 4px 0 #E62434",
                        "6px 5px 0 #E62434",
                        "0px 6px 0 #E62434",
                        "-1px 6px 0 #E62434",
                    ],
                }}>R</huruf><huruf style = {{
                        "text-shadow": [
                        "6px 6px 0 #E62434",
                        "6px 2px 0 #E62434",
                        "4px 6px 0 #E62434",
                        "2px 6px 0 #E62434",
                    ],
                }}>S</huruf><huruf style = {{
                        "text-shadow": [
                        "6px 6px 0 #E62434",
                        "6px 2px 0 #E62434",
                        "4px 6px 0 #E62434",
                        "2px 6px 0 #E62434",
                    ],
                }}>E</huruf><huruf style = {{
                        "text-shadow": [
                        "6px 6px 0 #E62434",
                        "6px 2px 0 #E62434",
                        "6px 3px 0 #E62434",
                        "6px 4px 0 #E62434",
                        "6px 5px 0 #E62434",
                        "-1px 6px 0 #E62434",
                        "0px 6px 0 #E62434",
                        "1px 6px 0 #E62434",
                        "2px 6px 0 #E62434",
                        "3px 6px 0 #E62434",
                        "4px 6px 0 #E62434",
                        "5px 6px 0 #E62434",
                    ],
                }}>NI</huruf><huruf style = {{
                    "text-shadow": [
                        "6px 6px 0 #E62434",
                        "6px 2px 0 #E62434",
                        "4px 6px 0 #E62434",
                        "2px 6px 0 #E62434",
                    ],
                }}>G</huruf><huruf style = {{
                    "text-shadow": [
                        "6px 6px 0 #E62434",
                        "6px 2px 0 #E62434",
                        "6px 3px 0 #E62434",
                        "6px 4px 0 #E62434",
                        "6px 5px 0 #E62434",
                        "-1px 6px 0 #E62434",
                        "0px 6px 0 #E62434",
                        "1px 6px 0 #E62434",
                        "2px 6px 0 #E62434",
                        "3px 6px 0 #E62434",
                        "4px 6px 0 #E62434",
                        "5px 6px 0 #E62434",
                    ],
                }}>AMA</huruf>
            </div>
            <div className = 'h-3'></div>
            <div className = 'flex justify-center md:justify-end'>
                <Countdown date="oct 30, 2021 18:29:59"/>
            </div>
            <div className = 'h-6 md:h-24 w-52'></div>
            <div className = 'hidden md:flex relative justify-center'>
                <div className = 'w-1/3'></div>
                <img onClick = {props.onClick} className = 'z-20 cursor-pointer transform transition duration-300 hover:scale-125' src = { ("images/Polygon 1.svg") } alt = "button to scroll" />
            </div>
        </div>            
    )
}

export default Title
