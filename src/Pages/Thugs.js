import React from 'react'
import Spell from "../Components/Spell"
import Spellbook from '../Components/Spellbook.json'

const Thugs = () => {
  const makeSpell = (spell) => {
    return (
      <Spell
        Name={spell.Name}
        Path={spell.Path}
        Level={spell.Level}
        Description={spell.Description}
        />
    )
  }


  return (
    <div>
      <h1>This is the page for thugsss of all stripes</h1>

      <h2> Thug paths </h2>
      <div>
      {makeSpell(Spellbook["Barkskin"])}
      {makeSpell(Spellbook["QuickenSelf"])}
      {makeSpell(Spellbook["Mossbody"])}

        Mossbody (Alt 3)<br/>
        Protection (Alt 3)<br/>
        Luck (Alt 3)<br/>
        Body Ethereal (Alt 4)<br/>
        Personal Regeneration (Ench 2)<br/>
        Regeneration (Ench 3)<br/>
        Awaken Tattoos (Ench 3)<br/>
      </div>
    </div>
  )
}

export default Thugs
