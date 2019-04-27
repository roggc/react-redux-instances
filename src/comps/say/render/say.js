import React from 'react'
import {connect} from 'react-redux'
import {store} from '../../../entries/client'
import reducer from '../redux/reducer'
import {saySet, sayHide} from '../redux/actions'
import addReducer from '../../../redux/reducer'
import style from '../style/say.css'

export default ({name, ...props})=>
{
  store.replaceReducer(addReducer(reducer(name), name))

  props.message&& store.dispatch(saySet(name)(props.message))

  const hide= ()=>
  {
    store.dispatch(sayHide(name)())
  }

  const instance= (state)=>
  (
    state.foo.show&&
    <div className={`${style.general}`}>
      {state.foo.val}
      <button onClick={hide}>hide</button>
    </div>
  )

  const mapStateToProps= (state)=>
  (
    {
      foo: state.comps[name]
    }
  )

  return React.createElement(connect(mapStateToProps)(instance))
}
