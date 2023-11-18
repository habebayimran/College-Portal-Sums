import './App.css';
import {BrowserRouter,Routes,Route,Link,Router} from 'react-router-dom';
import Home from './day7/Home';
import About from './day7/About';
import Navbar from './day7/Navbar';

export default function App() {
  return (
    <div className="App">
      {/* <List2/> */}
      {/* <Key/> */}
      {/* <List/> */}
      {/* <PrimarySearchAppBar/> */}
      {/* <FormPropsTextFields/> */}
      {/* <RatingSize/> */}
      {/* <FormDialog/> */}
      {/* <PositionedSnackbar/> */}
      {/* <SimpleBackdrop/> */}
      {/* <Day4cwhelp1/> */}
      {/* <Day4cwhelp2/> */}
      {/* <Day4cwhelp3/> */}
      {/* <Day4cw/> */}
      {/* <Hooksconcept/> */}
      {/* <PropsFunc name="Imran" age="18" /> */}
      {/* <MyComponent/> */}
      {/* <Ques20/> */}
      {/* <Ques32/> */}
      {/* <Ques30/> */}
      {/* <ErrorBoundary2>
        <ErrorBoundary1 studentName="Harish"/>
      </ErrorBoundary2> */}
      {/* <TryCatch name='Aja'/> */}
      {/* <Loginpage/> */}
      {/* <HoverCouunter/> */}
      {/* <Propvalidation name={12}/> */}
      {/* <SpreadpassUnkonown title1='SKCET' type='password' placeholder='Enter Password' id='i'/> */}
      {/* <Reference/> */}
      <BrowserRouter>
      <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
       </ul>
       {/* <Navbar/> */}
          <Routes>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

