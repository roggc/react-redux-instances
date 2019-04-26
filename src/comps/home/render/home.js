__devMode__&& console.log('src/comps/home/render/home')

import React from 'react'
import {connect} from 'react-redux'
import style from '../style/home.css'

const comp= (props)=>
(
  props.home.show&&
  <div className={`${style.placeholder}`}>
    hello ...
  </div>
)

const mapStateToProps= (state)=>
(
  {
    home: state.comps.home
  }
)

export default connect(mapStateToProps)(comp)
