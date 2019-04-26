__devMode__&& console.log('src/comps/app/render/app')

import React from 'react'
import {connect} from 'react-redux'
import Posts from '../../posts/render/posts'
import Header from '../../header/render/header'
import Content from '../../content/render/content'
import Prueba1 from '../../prueba1/prueba1'
import style from '../style/app.css'
import {store} from '../../../entries/client'

const comp= (props)=>
(
  props.app.show&&
  <div className={`${style.noneSelectable}`}>
    <Header/>
    <Content/>
    <Posts/>
    <Prueba1 state={store.getState().comps.header}/>
  </div>
)

const mapStateToProps= (state)=>
(
  {
    app: state.comps.app
  }
)

export default connect(mapStateToProps)(comp)
