import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Oyewale Oyediran`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          I am <strong>Oyewale Oyediran</strong> and I document my parenting experience here.{' '}
          You can find me on Twitter as <a href="https://twitter.com/waleoyediran">@waleoyediran</a>
        </p>
      </div>
    )
  }
}

export default Bio
