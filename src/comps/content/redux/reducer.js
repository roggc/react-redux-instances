__devMode__&& console.log('src/comps/content/redux/reducer')

import React from 'react'
import Home from '../../home/render/home'

export default (val=
  {
    show: true,
    pending: false,
    children: <Home/>
  }, act)=>
{
  switch (act.type) {
    default:
      return val
  }
}
