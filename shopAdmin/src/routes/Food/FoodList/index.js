import React, { PureComponent } from 'react';
import { connect } from 'dva';
const newPage = (props) => {
  console.log(props)
  let {
    foodListData
  } = props
  return (
    <div>新页面{foodListData.length}</div>
  )
}
export default connect((state) => {
  return {
    foodListData: state.foodlist.foodListData
  }
})(newPage)