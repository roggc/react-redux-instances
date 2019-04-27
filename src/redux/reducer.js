__devMode__&& console.log('src/redux/reducer')

import {combineReducers} from 'redux'

let compReducers= {}
let otherRecuders= {}

export default (reducer, name)=>
{
  compReducers=
  {
    ...compReducers,
    [name]: reducer
  }

  return combineReducers
  (
    {
      ...otherRecuders,
      comps: combineReducers(compReducers)
    }
  )
}
