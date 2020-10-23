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

        <div className="col-sm p-3 m-1 border border-primary rounded">
          <h3 className="text-center pb-2">Caster</h3>
          <table style={{width: "110%"}}>
            <tr><td>Paths:</td><td><input className="m-1" type="number" value={masterPaths}
            onChange={e => setMasterPaths(e.target.value)}/></td></tr>
            <tr><td>Spell Lvl:</td><td><input className="m-1" type="number" value={spellLevel}
            onChange={e => setSpellLevel(e.target.value)}/></td></tr>
            <tr><td>Fatigue:</td><td><input className="m-1" type="number" value={spellFatigue}
            onChange={e => setSpellFatigue(e.target.value)}/></td></tr>
            <tr><td>Encumbrace:</td><td><input className="m-1" type="number" value={masterEncumbrance}
            onChange={e => setMasterEncumbrance(e.target.value)}/></td></tr>
          </table>
        </div>

        <div className="col-sm p-3 m-1 border border-danger rounded">
        <h3 className="text-center pb-2">Slave</h3>
        <table>
          <tr><td>Paths:</td><td><input className="m-1" type="number" value={slavePaths}
          onChange={e => setSlavePaths(e.target.value)}/></td></tr>
          <tr><td>Spell Lvl:</td><td><input className="m-1" type="number" value={slaveNumber}
          onChange={e => setSlaveNumber(e.target.value)}/></td></tr>
          </table>
        </div>
      </div>
      <p>Value is {masterPaths}</p>
    </div>
  )
}

export default ComCalc
