import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharactersPage from '../../Pages/CharactersPage';
import CharacterDetailedView from '../../Pages/CharacterDetailedView';


const AllRoutes = () => {
  return (
   <Routes>
      <Route path="/" element={<CharactersPage/>} />
      <Route path="/view-job/:ticketId" element={<CharacterDetailedView/>}/>
   </Routes>
  );
};

export default AllRoutes;
