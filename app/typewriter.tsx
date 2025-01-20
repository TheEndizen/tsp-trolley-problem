"use client"

import React, { useEffect, useRef, useState } from "react";

export const useTypewriter = (text:TypeWriterProps) => {
    const [displayText, setDisplayText] = useState("");
    const idx = useRef(0);
    const displayTextRef = useRef("");
    useEffect(() => {
      const typingInterval = setInterval(() => {
        if (idx.current < text.text.length) {
          displayTextRef.current += text.text.charAt(idx.current);
          setDisplayText(() => displayTextRef.current);
          idx.current += 1;
        } else {
          clearInterval(typingInterval);
        }
      }, text.speed);
      return () => {
        setDisplayText("");
        clearInterval(typingInterval);
      };
    }, [text.text, text.speed]);
    return displayText;
};

export default function index(text:TypeWriterProps) {
  const typedText = useTypewriter(text);
  return <p className="text-black text-2xl text-center">{typedText}</p>;
}

interface TypeWriterProps {
    text: string;
    speed: number;
}