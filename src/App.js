import React, { useRef, useEffect } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";


function App() {
  const bg1Ref = useRef();
  const gapuraRef = useRef();
  const gapuraSmallRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 768) {
      bg1Ref.current.style.width = window.innerWidth*(8/10) + window.pageYOffset + "px";
      gapuraRef.current.style.width = window.innerWidth*(4/10) + window.pageYOffset*(5/4) + "px";
    } else {
      bg1Ref.current.style.width = window.innerWidth*(3) + "px";
      gapuraSmallRef.current.style.width = window.innerWidth*(3/4) + window.pageYOffset*(1/12) + "px";
    }
    const onScrollAnim = (event) => {
      if (window.innerWidth > 768) {
        bg1Ref.current.style.width = window.innerWidth*(8/10) + window.pageYOffset + "px";
        gapuraRef.current.style.width = window.innerWidth*(4/10) + window.pageYOffset*(5/4) + "px";
      } else {
        bg1Ref.current.style.width = window.innerWidth*(3) + "px";
        gapuraSmallRef.current.style.width = window.innerWidth*(3/4) + window.pageYOffset*(1/12) + "px";
      }
    };
    
    window.addEventListener('scroll', onScrollAnim);
    return () => window.removeEventListener('scroll', onScrollAnim);
  }, []);

  const onClick = () => {
    document.getElementById("Section2").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="z-10 right-0 fixed"
        ref={bg1Ref}
        style={{
          height: "100vh",
          width: "80vw",
          backgroundImage: 'url("images/Group bg 1.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }}
      ></div>
      <div
        className="z-15 right-0 fixed hidden bg-auto md:flex"
        ref={gapuraRef}
        style={{
          height: "100vh",
          width: "40vw",
          background: 'url("images/gapura-sec1-2.svg") no-repeat',
        }}
      ></div>
      <div
        className="z-15 right-0 fixed flex md:hidden bg-auto"
        ref={gapuraSmallRef}
        style={{
          height: "100vh",
          width: "40vw",
          backgroundImage: 'url("images/gapura-sec1-2.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: '700px',
        }}
      ></div>
      <img
        className="z-0 absolute"
        src={"images/kolase foto.svg"}
        alt="Kolase Foto Dokumentasi Porsenigama"
      />
      <Section1 onClick={onClick} />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
