import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/BusinessAgent.json'

export default function BusinessAgent() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}