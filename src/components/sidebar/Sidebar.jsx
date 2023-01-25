import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png'
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons'
import { SideBarData } from '../../data/Data.js'
import { motion } from 'framer-motion'
const Sidebar = () => {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(true)

  const sidebarVarient = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  }

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: '60%' } : { left: '5%' }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVarient}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/* menu */}
        <div className="menu">
          {SideBarData.map((item, index) => {
            return (
              <div
                className={selected == index ? 'menuItem active' : 'menuItem'}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            )
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
