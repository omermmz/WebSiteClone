
import './App.css';
import Header from './components/Header';
import OpenPage from './components/openPage';
import SecondPage from './components/secondPage';
import ThirdPage from './components/thirdPage';
import FourthPage from './components/fourthpage';
import FifthPage from './components/fifthpage';
import SixthPage from './components/sixthpage';
import SeventhPage from './components/seventhpage';
import EighthPage from './components/eighthpage';
import NinthPage from './components/ninthpage';
import NavPage from './components/navpage';
import { useRef } from 'react';
import NavDeneme from './components/navdeneme';


function App() {

  const MyRef = useRef(null)
  const MyRef2 = useRef(null)
  const MyRef3 = useRef(null)
  const MyRef4 = useRef(null)
  const MyRef5 = useRef(null)

  const onClick = () =>  MyRef.current.scrollIntoView({behavior: 'smooth'});  
  const onClick2 = () => MyRef2.current.scrollIntoView({behavior: 'smooth'});
  const onClick3 = () => MyRef3.current.scrollIntoView({behavior: 'smooth'});
  const onClick4 = () => MyRef4.current.scrollIntoView({behavior: 'smooth'});
  const onClick5 = () => MyRef5.current.scrollIntoView({behavior: 'smooth'});
  
  return (
    <div className="App">

      
      <Header onClick={onClick} onClick2={onClick2} onClick3={onClick3} onClick4={onClick4} referans={MyRef5}/>
      <div className='openpagedivapp'><OpenPage onClick={onClick} /></div>
      <SecondPage referans={MyRef} onClick={onClick4} />
      <ThirdPage referans={MyRef2} />
      <FourthPage onClick={onClick4} />
      <FifthPage onClick={onClick4} />
      <SixthPage/>
      <SeventhPage referans={MyRef3} onClick={onClick4} />
      <EighthPage/>
      <NinthPage referans={MyRef4} />
      <NavDeneme />
      <NavPage onClick={onClick5} />
      
    
    </div>
   
  );
}

export default App;


/*

      
      
       <Sliderdeneme />
      
      
     
      
      
      
      
*/