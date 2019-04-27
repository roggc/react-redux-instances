__devMode__&& console.log('src/comps/app/render/app')

import React from 'react'
import {connect} from 'react-redux'
import Posts from '../../posts/render/posts'
import Header from '../../header/render/header'
import Content from '../../content/render/content'
import Prueba1 from '../../prueba1/prueba1'
import style from '../style/app.css'
import {store} from '../../../entries/client'
import addReducer from '../../../redux/reducer'
import reducer from '../redux/reducer'
import {appSetShow} from '../redux/actions'

export default ({name, ...props})=>
{
  store.replaceReducer(addReducer(reducer(name), name))

  const mapStateToProps= (state)=>
  (
    {
      foo: state.comps[name]
    }
  )

  const instance= (state)=>
  {
    const clicked= ()=>
    {
      store.dispatch(appSetShow(name)(false))
    }

    const el=
    (
      state.foo.show&&
      <div className={`${style.noneSelectable}`}>
        {props.message} <button onClick={clicked}>hide me</button>
      </div>
    )

    return el
  }

  return React.createElement(connect(mapStateToProps)(instance))
}
