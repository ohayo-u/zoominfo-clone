import React, { useState } from 'react'
import axios from 'axios'

export function Chatgpt() {
  const [question, setQuestion] = useState("");
  const [chatGptAnswer, setChatGptAnswer] = useState("");
  const apiKey =import.meta.env.VITE_OPENAI_API_KEY

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post('https://api.openai.com/v1/chat/completions',
    {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": question}]
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      }
    })
    .then(response => {
      setChatGptAnswer(response.data.choices[0].message.content);
      setQuestion("")
    })
    .catch((error) => {
      console.error('An error occurred:', error.response.data);
    })
  }

  const handleChange = (e) => {
    if(e.target.value) {
      setQuestion(e.target.value)
    }
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div>
      <input 
        type='text' 
        onChange={(e) => handleChange(e)} 
        value={question} 
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button onClick={(e) => handleSubmit(e)}>chatGPTへ質問</button>
      {chatGptAnswer && (
      <p>{chatGptAnswer}</p>
      )}
    </div>
  )

}