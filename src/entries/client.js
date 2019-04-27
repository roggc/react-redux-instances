__devMode__&& console.log('src/entryPoints/client')

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import getStore from '../redux/store'
import App from '../comps/app/render/app'
import {start} from '../redux/extra/start/actions'

export const store= getStore()

render
(
  <Provider store={store}>
    <div>
      <App name='app1' message='hola'/>
      <App name='app2' message='adios'/>
    </div>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(start())