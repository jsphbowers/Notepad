import React, { useState } from "react"

export default function Note(props) {
  const [note, setNote] = useState("")

  return (
    <div>
      <textarea name="note" id="note" rows={15} cols={100}></textarea>
      <h1>{note}</h1>
    </div>
  )
}