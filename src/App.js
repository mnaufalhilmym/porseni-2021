import React, { useRef, useEffect, useState } from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const bg1Ref = useRef();
  const gapuraRef = useRef();

  // const useBgAnim = ({ width, height }) => {
    useEffect(() => {
      const onScrollAnim = (event) => {
        if (window.innerWidth > 641) {
          bg1Ref.current.style.width = window.innerWidth*(8/10) + window.pageYOffset + "px";
          gapuraRef.current.style.width = window.innerWidth*(4/10) + window.pageYOffset*(3/2) + "px";
        } else {
          bg1Ref.current.style.width = window.innerWidth*(3) + "px";
          gapuraRef.current.style.width = window.innerWidth*(2/10) + window.pageYOffset*(1/2) + "px";
        }
      };
      
      window.addEventListener('scroll', onScrollAnim);
      return () => window.removeEventListener('scroll', onScrollAnim);

    }, []);
  // }
  // useBgAnim(useViewport());

  const onClick = () => {
    document.getElementById('Section2').scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div>
      <div className = 'z-10 right-0 fixed h-full w-4/5' ref = {bg1Ref} style = {{backgroundImage: 'url("images/sec-1-2-bg-transisi.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div>
      <div className = 'z-15 right-0 fixed h-full w-2/5' ref = {gapuraRef} style = {{backgroundImage: 'url("images/gapura-sec1-2.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div>
      {/* <div className = 'z-20 right-0 absolute' ref = {bg2Ref} style = {{height: "100vh", width: "100vw", backgroundImage: 'url("images/Group bg 2.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div> */}
      <img className = 'z-0 absolute' src = { ("images/kolase foto.svg") } alt = 'Kolase Foto Dokumentasi Porsenigama' />            
      <Section1 onClick = {onClick} />
      <Section2 />
    </div>
  );
}

export default App;
