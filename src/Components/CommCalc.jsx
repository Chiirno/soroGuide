import React, { useState } from 'react'

const ComCalc = () => {
  const [masterPaths, setMasterPaths] = useState("")
  const [spellFatigue, setSpellFatigue] = useState("")
  const [spellLevel, setSpellLevel] = useState("")
  const [masterEncumbrance, setMasterEncumbrance] = useState("")

  const [slavePaths, setSlavePaths] = useState("")
  const [slaveNumber, setSlaveNumber] = useState("")

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm p-3 m-1 border border-primary rounded"> <h3>Caster</h3>
          Paths: <input className="m-1" type="number" value={masterPaths}
          onChange={e => setMasterPaths(e.target.value)}/><br/>
          Spell Lvl: <input className="m-1" type="number" value={spellLevel}
          onChange={e => setSpellLevel(e.target.value)}/><br/>
          Fatigue: <input className="m-1" type="number" value={spellFatigue}
          onChange={e => setSpellFatigue(e.target.value)}/><br/>
          Encumbrace: <input className="m-1" type="number" value={masterEncumbrance}
          onChange={e => setMasterEncumbrance(e.target.value)}/>
        </div>

        <div className="col-sm p-3 m-1 border border-danger rounded"> <h3>Slave</h3>
          Paths: <input className="m-1" type="number" value={slavePaths}
          onChange={e => setSlavePaths(e.target.value)}/><br/>
          Spell Lvl: <input className="m-1" type="number" value={slaveNumber}
          onChange={e => setSlaveNumber(e.target.value)}/><br/>
        </div>
      </div>
      <p>Value is {masterPaths}</p>
    </div>
  )
}

export default ComCalc
