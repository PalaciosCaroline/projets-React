import React from 'react'

export default function Banner({ image }) {

  // const sectionStyle = {
  //   backgroundImage: "linear-gradient(45deg,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3)), url(" + image + ")"
  // }

  // return (
  //   <div className="banner" style={sectionStyle}>
  //   </div>
  // )
  
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="imgBanner_filter"></div>
    </div>
  )
}
