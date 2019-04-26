__devMode__&& console.log('src/comps/header/render/header')

import React from 'react'
import {connect} from 'react-redux'
import style from '../style/header.css'

const comp= (props)=>
(
  props.header.show&&
  <div className={`${style.flexRow} ${style.placeholder}`}>
    <div className={`${style.flexGrow} ${style.flexColumn} ${style.flexJustify1}`}>
      <div className={`${style.flexShrink}`}>
        React app ...
      </div>
    </div>
    <div className={`${style.placeholder2}`}><i className="fas fa-align-justify"></i></div>
  </div>
)

const mapStateToProps= (state)=>
(
  {
    header: state.comps.header
  }
)

export default connect(mapStateToProps)(comp)
