__devMode__&& console.log('src/comps/content/render/content')

import React from 'react'
import {connect} from 'react-redux'
import style from '../style/content.css'


const comp= (props)=>
(
  props.content.show&&
  <div className= {`${style.placeholder} ${style.flexColumn1}`}>
  <div className={`${style.flexRow1}`}>
    {props.content.children}
    </div>
  </div>
)

const mapStateToProps= (state)=>
(
  {
    content: state.comps.content
  }
)

export default connect(mapStateToProps)(comp)
