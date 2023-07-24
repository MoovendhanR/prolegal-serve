// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage';
import TicketDetails from '../TicketsDetail/TicketsDetail';


const AllRoutes: React.FC = () => {
  return (
   <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/view-job/:ticketId" element={<TicketDetails/>}/>
   </Routes>
  );
};

export default AllRoutes;
