import Timeline from './Timeline.js'

const Section2 = () => {
    return (
        <div id = 'Section2' className = 'bg-biru h-screen w-full'>
            <div className = 'z-0 h-screen'>
                <div className = 'h-screen w-full absolute opacity-50' style = {{backgroundImage : 'url(/images/XMLID_296_2.svg)'}}></div> 
                <img className = 'absolute' src={("images/gapura sct 2.svg")} alt="" />
            </div>
            <dir className = 'mt-0 h-screen flex content-end justify-end relative'>
                <Timeline />
            </dir>
        </div>
    )
}

export default Section2
