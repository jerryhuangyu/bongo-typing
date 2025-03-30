"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function TypingDemo() {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [leftPawState, setLeftPawState] = useState("up") // "up" or "down"
  const [rightPawState, setRightPawState] = useState("up") // "up" or "down"
  const [lastKeyWasLeft, setLastKeyWasLeft] = useState(true) // to alternate between paws

  // Key mapping - which keys are typed with left vs right hand
  const leftKeys = new Set([
    "q",
    "w",
    "e",
    "r",
    "t",
    "a",
    "s",
    "d",
    "f",
    "g",
    "z",
    "x",
    "c",
    "v",
    "b",
    "1",
    "2",
    "3",
    "4",
    "5",
  ])

  // Simulate typing animation
  useEffect(() => {
    const phrases = [
      "Hello world!",
      "Type with your cat friend",
      "Bongo loves to type with you",
      "Watch the paws go tap tap tap",
    ]

    let phraseIndex = 0
    let charIndex = 0
    let direction = 1 // 1 for typing, -1 for deleting

    const interval = setInterval(() => {
      if (direction === 1) {
        // Typing
        if (charIndex < phrases[phraseIndex].length) {
          const newChar = phrases[phraseIndex][charIndex]
          setText(phrases[phraseIndex].substring(0, charIndex + 1))
          charIndex++
          setIsTyping(true)

          // Determine which paw to animate based on the character
          const isLeftKey = leftKeys.has(newChar.toLowerCase())
          setLastKeyWasLeft(isLeftKey)

          if (isLeftKey) {
            setLeftPawState("down")
            setTimeout(() => setLeftPawState("up"), 150)
          } else {
            setRightPawState("down")
            setTimeout(() => setRightPawState("up"), 150)
          }
        } else {
          // Pause at the end of typing
          setIsTyping(false)
          setTimeout(() => {
            direction = -1
          }, 1500)
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setText(phrases[phraseIndex].substring(0, charIndex - 1))
          charIndex--
          setIsTyping(true)

          // Alternate paws when deleting
          setLastKeyWasLeft(!lastKeyWasLeft)

          if (lastKeyWasLeft) {
            setLeftPawState("down")
            setTimeout(() => setLeftPawState("up"), 150)
          } else {
            setRightPawState("down")
            setTimeout(() => setRightPawState("up"), 150)
          }
        } else {
          // Move to next phrase
          direction = 1
          phraseIndex = (phraseIndex + 1) % phrases.length
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
          }, 500)
        }
      }
    }, 100)

    return () => clearInterval(interval)
  }, [lastKeyWasLeft])

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-[#FCFCFC] rounded-2xl p-6 shadow-lg">
        {/* Text editor area */}
        <div className="bg-white rounded-2xl p-4 font-mono text-[#333333] mb-4 min-h-[100px] relative border-2 border-[#FFE156]">
          <div className="flex items-center gap-2 mb-2 opacity-50">
            <div className="w-3 h-3 rounded-full bg-[#FF5C8D]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFE156]"></div>
            <div className="w-3 h-3 rounded-full bg-[#7DEDFF]"></div>
          </div>
          <p>
            {text}
            <span className={`inline-block w-2 h-4 bg-[#FF5C8D] ${isTyping ? "animate-blink" : ""}`}></span>
          </p>
        </div>

        {/* Character */}
        <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
          <div className="relative">
            <Image src="/images/bg.png" alt="Bongo Cat" width={300} height={150} className="object-contain" />
          </div>
        </div>

        {/* Paws */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={`/images/left-${leftPawState}.png`}
            alt="Left Paw"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <Image
            src={`/images/right-${rightPawState}.png`}
            alt="Right Paw"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

