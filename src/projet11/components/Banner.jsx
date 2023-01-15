import React from 'react'

export default function Banner({ image }) {
  
  const imageBanner = { backgroundImage: `url(${image})` }

  return (
    <div className="banner" style={imageBanner}>
    </div>
  )
}
