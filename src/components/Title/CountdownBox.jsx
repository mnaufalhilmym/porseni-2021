export default function CountdownBox (props) {
	return(
		<div className = 'z-50 relative'>
			<p className="text-3xl md:text-5xl text-center text-biru"> {props.number} </p>	
		</div>
	)
}