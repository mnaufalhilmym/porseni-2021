import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const onClick = () => {
    document.getElementById('Section2').scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <Section1 onClick = {onClick} />
      <Section2 />
    </>
  );
}

export default App;
