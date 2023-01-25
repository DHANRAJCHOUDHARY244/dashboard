import React from 'react'
import Cards from '../Cards/Cards.jsx'
import Table from '../Table/Table.jsx'
import './MainDash.css'
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default MainDash