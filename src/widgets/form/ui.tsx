'use client'

import {useState} from "react";
import {pushEvent} from "@/shared/lib/push-event";

export const TestForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(() => resolve, 500))
      pushEvent('form_submit', { form_name: 'callback' });
    } catch (err) {
      pushEvent('form_error', { form_name: 'callback', error_type: 'request_failed' });
    }
  }

  return (
    <div>
      <input type="text" placeholder={"name"} value={name} onChange={(event) => setName(event.target.value)}/>
      <input type="email" placeholder={"email"} value={email} onChange={(event) => setEmail(event.target.value)}/>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}