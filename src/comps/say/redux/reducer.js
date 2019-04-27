import * as types from './types'

export default (name)=>(val=
{
  show: true,
  val: '...'
}, act)=>
{
  switch (act.type) {
    case types.SAY_SET_+name:
      val=
      {
        ...val,
        val: act.val
      }
      return val
    case types.SAY_HIDE_+name:
      val=
      {
        ...val,
        show: false
      }
      return val
    default:
      return val
  }
}