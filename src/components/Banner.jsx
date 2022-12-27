import React from 'react'

export default function Banner({ image }) {

  const sectionStyle = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(" + image + ")"
  }

  return (
    <div className="banner" style={sectionStyle}>
    </div>
  )
}
