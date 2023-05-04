import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/animation2.json'

export default function Animation2() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 300 }}
    />
  )
}