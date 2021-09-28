import Title from './Title.js'
import Side1 from './Side1.js'

const Section1 = (props) => {
    return (
        <div className = 'w-full'>
            <img className = '-z-10 object-contain left-12 top-14 transform scale-110 absolute' src = { ("images/kolase foto.svg") } alt = 'Kolase Foto Dokumentasi Porsenigama' />
            <img className = 'z-5 right-0 absolute' src = { ("images/bg biru gelombang sct 1.svg") } />
            <img className = 'z-10 object-contain right-0 absolute' src= { ("images/gapura sct 1.svg") } />
            <img className = 'z-15 right-0 absolute opacity-50' src = { ("images/XMLID_296_.svg") } />
            <dir className = 'mt-0 h-screen flex content-end justify-end relative'>
                <Title onClick = {props.onClick}/>
                <Side1 />
            </dir>
        </div>
    )
}

export default Section1
