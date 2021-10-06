import React, { useRef, useEffect, useState } from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const bg1Ref = useRef();
  const gapuraRef = useRef();

  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Use for responsive conditional  
    return { width, height };
  }
  
  const useBgAnim = ({ width, height }) => {
    useEffect(() => {
      const onScrollAnim = (event) => {
        if (width > 641) {
          bg1Ref.current.style.width = width*(8/10) + window.pageYOffset + "px";
          gapuraRef.current.style.width = width*(4/10) + window.pageYOffset*(3/2) + "px";
        } else {
          bg1Ref.current.style.width = width*(3) + "px";
          gapuraRef.current.style.width = width*(2/10) + window.pageYOffset*(1/2) + "px";
        }
      };
      
      window.addEventListener('scroll', onScrollAnim);
      return () => window.removeEventListener('scroll', onScrollAnim);

    }, []);
  }
  useBgAnim(useViewport());

  const onClick = () => {
    document.getElementById('Section2').scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div>
      <div className = 'z-10 right-0 fixed' ref = {bg1Ref} style = {{height: "100vh", width: "80vw", backgroundImage: 'url("images/sec-1-2-bg-transisi.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div>
      <div className = 'z-15 right-0 fixed' ref = {gapuraRef} style = {{height: "100vh", width: "40vw", backgroundImage: 'url("images/gapura-sec1-2.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div>
      {/* <div className = 'z-20 right-0 absolute' ref = {bg2Ref} style = {{height: "100vh", width: "100vw", backgroundImage: 'url("images/Group bg 2.svg")', backgroundRepeat: "no-repeat", backgroundSize: "auto"}}></div> */}
      <img className = 'z-0 absolute' src = { ("images/kolase foto.svg") } alt = 'Kolase Foto Dokumentasi Porsenigama' />            
      <Section1 onClick = {onClick} />
      <Section2 />
    </div>
  );
}

export default App;
