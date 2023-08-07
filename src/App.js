import React from "react";
import { MainPageHeader } from "./Components/Mainpage/MainPageHeader";
import { NavbarPart } from "./Components/Navbar/Navbar";
import AllRoutes from "./Components/Routes/Route";

function App() {
  return (
    <div style={{display: 'flex',gap:"0"  }}>
    <div style={{width: '16.5%',height: '100vh'}}>
      <NavbarPart/>
    </div>
    <div style={{width: '84.5%',height: '100vh'}}>
      <MainPageHeader />
       <AllRoutes/>
    </div>

</div>

  );
}

export default App;
