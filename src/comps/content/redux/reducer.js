__devMode__&& console.log('src/comps/content/redux/reducer')

import React from 'react'
import Home from '../../home/render/home'

export default name=> (val=
  {
    show: true,
    children: <Home name='home1'/>
  }, act)=>
{
  switch (act.type)
  {
    default:
      return val
  }
}
