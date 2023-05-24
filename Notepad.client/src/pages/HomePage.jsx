import React, { useState } from "react";
import Note from "../components/Note.jsx";

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <div className="container my-3">
        {/* <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-success my-1" onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <section className="row">
          <div className="col-4">
            <h3>Total Notes = {count}</h3>
            <div className="card">
            </div>
          </div>
          <div className="col-6">
            <Note {setCount(count) -> count + 1} />
          </div>
        </section>
      </div>
    </div>
  )
}

