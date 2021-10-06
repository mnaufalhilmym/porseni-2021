import React, { useRef, useEffect } from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const bg1Ref = useRef();
  const bg2Ref = useRef();
  const gapuraRef = useRef();

  useEffect(() => {
    const onScroll = (event) => {
      bg1Ref.current.style.width = window.innerWidth*(8/10) + window.pageYOffset + "px"
      gapuraRef.current.style.width = window.innerWidth*(4/10) + window.pageYOffset*(3/2) + "px"
    };
    
    window.addEventListener('scroll', onScroll);
    
  }, []);

  const onClick = () => {
    document.getElementById('Section2').scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div>
      <div className = 'z-10 right-0 fixed' ref = {bg1Ref} style = {{height: "100vh", width: "80vw", backgroundImage: 'url("images/Group bg 1.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div>
      <div className = 'z-15 right-0 fixed' ref = {gapuraRef} style = {{height: "100vh", width: "40vw", backgroundImage: 'url("images/gapura-sec1-2.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div>
      <div className = 'z-20 right-0 absolute' ref = {bg2Ref} style = {{height: "100vh", width: "100vw", backgroundImage: 'url("images/Group bg 2.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div>
      <img className = 'z-0 absolute' src = { ("images/kolase foto.svg") } alt = 'Kolase Foto Dokumentasi Porsenigama' />            
      <Section1 onClick = {onClick} />
      <Section2 />
    </div>
  );
}

export default App;
