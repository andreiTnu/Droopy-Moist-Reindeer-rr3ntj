import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Droopy Moist Reindeer</title>
        <meta property="og:title" content="Droopy Moist Reindeer" />
      </Helmet>
    </div>
  )
}

export default Home
