import React from 'react'

export default function Banner({ image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="imgBanner_filter"></div>
    </div>
  )
}
