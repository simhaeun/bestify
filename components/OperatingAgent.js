import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/OperatingAgent.json'

export default function OperatingAgent() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}