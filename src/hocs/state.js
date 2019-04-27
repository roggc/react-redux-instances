
import React from 'react'
import {connect} from 'react-redux'
import {store} from '../entries/client'
import addReducer from '../redux/reducer'

const withInstance= pre=>comp=>name=>init=>
{
  pre(name)(init)
  return comp(name)
}

const withState= (instance)=> (reducer)=> ({name, ...props})=>
{
  store.replaceReducer(addReducer(reducer(name), name))

  const mapStateToProps= (state)=>
  (
    {
      foo: state.comps[name]
    }
  )

  return React.createElement(connect(mapStateToProps)(instance(name)(props)))
}

export default pre=>comp=>reducer=> withState(withInstance(pre)(comp))(reducer)
