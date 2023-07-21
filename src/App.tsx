import React from 'react';

// import './App.css';
import {  NavbarPart } from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage';

function App() {
  return (
    // <Container style={{display: 'flex',width: '100vw',backgroundColor:"green"}}>
    //     <Paper style={{ width: '30%',marginLeft:0  }}>
    //      <NavbarPart/>
    //     </Paper>
    //     <Paper style={{ width: '70%',backgroundColor:"yellow" }}>
    //      <MainPage/>
    // </Paper>
    // </Container>
    <div style={{display: 'flex', backgroundColor: 'green',gap:"0"  }}>
        <div style={{width: '16.5%',height: '100vh'}}>
          <NavbarPart/>
        </div>
        <div style={{width: '84.5%',height: '100vh',backgroundColor: 'yellow'}}>
          <MainPage/>
        </div>
   
    </div>
  );
}

export default App;
