import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { getFoodList } from '../services/api';

export default {
  namespace: 'foodlist',

  state: {
    foodListData: []
  },

  effects: {
    *GetFoodList({ payload }, { call, put }) {
      let listData = yield call(getFoodList, payload);
      console.log(listData)
      yield put({type: 'setFoodList', payload: {
        foodListData: listData
      }})
    }
  },

  reducers: {
    setFoodList(state, {payload}) {
      return {
        ...state,
        foodListData: payload.foodListData
      }
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/food/foodlist') {
          dispatch({ type: 'GetFoodList' });
        }
      });
    },
  }
};
