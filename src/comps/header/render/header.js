__devMode__&& console.log('src/comps/header/render/header')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/header.css'

const inst= name=> state=>
(
  state.foo.show&&
  <div className={`${style.flexRow} ${style.placeholder}`}>
    <div className={`${style.flexGrow} ${style.flexColumn} ${style.flexJustify1}`}>
      <div className={`${style.flexShrink}`}>
        React app ...
      </div>
    </div>
    <div className={`${style.placeholder2}`}><i className="fas fa-align-justify"></i></div>
  </div>
)

export default withState()(inst)(reducer)
