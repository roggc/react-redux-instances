## react-redux-pro

this app (boilerplate, setup) allows you to develop *react-redux* apps by easily creating instances of functional components attached to a redux state. when you use the component you must pass it a `name` (unique) property.

you define a component like this:

`const inst= name=> state=> { ... }`

`export default withState()(inst)(reducer)`

and you use it like this:

`<Comp name='name1'/>`

optionally you can pass some `init` properties to change default `state` before first rendering:

`const init= name=> init=> {...}`
`const inst= name=> state=> {...}`
`export default withState(init)(inst)(reducer)`

and:

`<Comp name='name1' prop1=''/>`

you use `prop1` to init state with `prop1` value inside `init` definition using `store.dispatch(action(name)(init.prop1))`

inside `inst` definition you get `state`. if you need to dispatch some actions you use `state.dispatch(action(name)(val))`

each instance receives its own `state`.

see the app running [here](https://react-redux-pro.herokuapp.com)
