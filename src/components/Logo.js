import React from 'react'

const SvgComponent = props => (
  <svg
    className='logo'
    viewBox="0 0 124 124"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={1.5}
    width="500px"
    height="500px"
    {...props}
  >
    <circle
      className='path'
      cx={800.971}
      cy={512.44}
      r={316.83}
      fill="none"
      stroke="#c8aa6e"
      strokeWidth={6.73}
      transform="rotate(21.658 128.017 -80.69) scale(.14867)"
    />
    <text
      className='path'
      x={805.397}
      y={904.377}
      fontFamily="'Montserrat-Medium','Montserrat Medium'"
      fontWeight={500}
      fontSize={482.072}
      fill="none"
      stroke="#c8aa6e"
      strokeWidth={6.01}
      strokeLinecap="butt"
      strokeMiterlimit={1.414}
      transform="rotate(21.657 273.937 -163.861) scale(.16647)"
    >
      {'L'}
    </text>
    <text
      className='path'
      x={805.397}
      y={904.377}
      fontFamily="'Montserrat-Medium','Montserrat Medium'"
      fontWeight={500}
      fontSize={482.072}
      fill="none"
      stroke="#c8aa6e"
      strokeWidth={6.74}
      strokeLinecap="butt"
      strokeMiterlimit={1.414}
      transform="rotate(21.657 209.07 -132.888) scale(.16647 .12796)"
    >
      {'I'}
    </text>
  </svg>
)

export default SvgComponent
