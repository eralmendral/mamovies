import React from 'react'

function Sidebar({ title }) {
  return (
    <>
      <h1 className="my-4">{ title }</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
      </div>
    </>
  )
}

export default Sidebar
