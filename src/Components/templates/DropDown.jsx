import React from 'react'

function DropDown({title,options,func}) {
  return (
    <div className='select'>
        <select onChange={func} defaultValue ="0" name= "format" id='format'>
          <option value="0" disabled>{title}</option>
          {options.map((o,i)=>(
            <option value={o}>{o.toUpperCase()}</option>
          ))}
        </select>
    </div>
  )
}

export default DropDown;