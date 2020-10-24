import React from 'react'

const Spell = (props) => {
  return (
    <div id={props.Name} className="shadow rounded border-dark border w-25 p-2 m-3">
      <div className="w-100 border-bottom pb-1">
        Name: {props.Name}
      </div>
        Path: {props.Path} <br/>
        Level: {props.Level} <br/>
        Desc: {props.Description} <br/>
    </div>
  )
}



export default Spell
