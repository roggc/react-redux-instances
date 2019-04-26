import React from 'react'
import {store} from '../../entries/client'

export default (props)=>
{
  const el=
  (
    props.state.show&&
    <div>prueba1 instancia</div>
  )
  return el
}
