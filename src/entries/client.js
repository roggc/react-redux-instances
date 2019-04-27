__devMode__&& console.log('src/entryPoints/client')

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import getStore from '../redux/store'
import SayHello from '../comps/sayHello/render/sayHello'
import Say from '../comps/say/render/say'
import {start} from '../redux/extra/start/actions'

export const store= getStore()

render
(
  <Provider store={store}>
    <div>
      {
        //<Say name='say0' message='goodbye'/>
      }
      <SayHello name='say1' message='italy'/>
    </div>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(start())
