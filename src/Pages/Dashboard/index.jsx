import React from 'react';
import { useHistory } from 'react-router-dom';


import './style.css';

function Dashboard() {
  const history = useHistory();

  const token = localStorage.getItem('token');

  if(!token){
    history.goBack();
  }


  return (
    <h1>Dashboard</h1>
  );
}

export default Dashboard;