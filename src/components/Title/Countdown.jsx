import CountdownBox from './CountdownBox'
import {useState} from 'react'

export default function Countdown (props) {
	const [timerSeconds, setSeconds] = useState("--")	
	const [timerMinutes, setMinutes] = useState("--")	
	const [timerHours, setHours] = useState("--")	
	const [timerDays, setDays] = useState("--")
		
	
	let countDownDate = new Date(new Date(`${props.date} gmt+7`).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})).getTime();
	
	let startCountDown = setInterval( function() {
	
        let now = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"})).getTime();
		let distance = countDownDate - now;
    
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		if (days < 10){
			days = "0" + days;
		}
	    
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		if (hours < 10){
			hours = "0" + hours;
		}
	    
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		if (minutes < 10){
			minutes = "0" + minutes;
		}
	    
		let seconds = Math.floor((distance % (1000 * 60)) / 1000)
		if (seconds < 10){
			seconds = "0" + seconds;
		}
		
		setDays(days)
		setHours(hours)
		setMinutes(minutes)
		setSeconds(seconds)
		if (distance < 0){
			clearInterval(startCountDown);
			setDays("00")
			setHours("00")
			setMinutes("00")
			setSeconds("00")
		}

	}, 1000)

	return(
        <>
            {/* <div className='grid grid-cols-5 justify-items-end z-10 font-nuku w-2/3'>
                <div className="absolute" style = {{'maxWidth': '100% ', 'height': 'auto', 'border-radius': '100%', 'background': 'red' }}>ass</div>
            </div> */}
            <div className='grid grid-cols-5 justify-items-end z-30 font-nuku w-2/3 cursor-default'>
                <div className = 'mt-1'>
                    <img src="./images/Logo.svg" alt="Logo Porsenigama" style = {{ 'maxWidth': '100%', 'height': 'auto' }} />
                </div>
                <div className="justify-center my-auto relative w-full h-full flex flex-wrap content-center">
                    <img className = 'z-0 absolute mt-1 md:mt-1.5' src="./images/circle.svg" alt="" />
                    <div className="flex mb-1">                    
                        <CountdownBox
                            isDark={props.isDark}
                            number={timerDays.toString().slice(0,1)} 
                        />                        
                        <CountdownBox
                            isDark={props.isDark}
                            number={timerDays.toString().slice(1,2)} 
                        />
                    </div>
                </div>
                <div className="justify-center my-auto relative w-full h-full flex flex-wrap content-center">
                    <img className = 'z-0 absolute mt-1 md:mt-1.5' src="./images/circle.svg" alt="" />
                    <div className="flex mb-1">
                        <CountdownBox
                            isDark={props.isDark}
                            number={timerHours.toString().slice(0,1)} 
                        />
                        <CountdownBox
                            isDark={props.isDark}
                            number={timerHours.toString().slice(1,2)} 
                        />
                    </div>
                </div>
                <div className="justify-center my-auto relative w-full h-full flex flex-wrap content-center">
                    <img className = 'z-0 absolute mt-1 md:mt-1.5' src="./images/circle.svg" alt="" />
                    <div className="flex mb-1">
                        <CountdownBox
                            isDark={props.isDark}
                            number={timerMinutes.toString().slice(0,1)} 
                        />
                        <CountdownBox
                            isDark={props.isDark}
                            number={timerMinutes.toString().slice(1,2)} 
                        />
                    </div>
                </div>
                <div className="justify-center my-auto relative w-full h-full flex flex-wrap content-center">
                    <img className = 'z-0 absolute mt-1 md:mt-1.5' src="./images/circle.svg" alt="" />
                    <div className="flex mb-1">
                        <CountdownBox
                            isDark={props.isDark}
                            number={timerSeconds.toString().slice(0,1)} 
                        />
                        <CountdownBox
                            isDark={props.isDark}
                            number={timerSeconds.toString().slice(1,2)} 
                        />
                    </div>
                </div>                
            </div>
        </>
    )
}