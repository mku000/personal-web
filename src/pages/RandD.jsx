import React from 'react'
import "./RandD.css"
import { Link } from 'react-router-dom'

const RandD = () => {
  return (
    <div className="intro flex flex-col p-5">
    <a href="/" className="code side-margin" style={{ color: 'black', marginBottom: '0px', fontWeight: 700, marginTop: '5px', fontSize: '14px' }}>RND</a>
  
    <div className="front-text side-margin" style={{ display: 'flex', marginBottom: '16px', alignItems: 'center', fontSize: '12px' }}>
    <Link to="/" className="hover:underline">
      BACK
    </Link>
    </div>
    <div className="posts flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginLeft: '1rem', display: 'inline-block', width: '5rem', marginRight: '0.8rem', alignItems: 'center', fontWeight: 700, color: 'black', fontSize: '12px' }}>
        Date
      </div>
      <div style={{ display: 'flex', fontWeight: 700, color: 'black', fontSize: '12px' }}>
        Entry
      </div>
    </div>
    
    {/* Repeat the following block for each post */}
    <div className="posts">
        <Link to="/rnd/details">
      <div style={{ marginLeft: '1rem', display: 'flex' }}>
        <p className="code date" style={{ display: 'inline-block', width: '5rem', marginRight: '0.8rem', fontSize: '12px', marginTop: '4px', alignItems: 'center', marginBottom: '0px' }}>27-03-2024</p>
        <a style={{ fontSize: '12px', alignItems: 'end', display: 'flex' }} className="link front-text" href="https://github.com">Teachers Pocket</a>
      </div>
        </Link>
    </div>
    {/* End of repeat block */}
  </div>
  
  )
}

export default RandD
