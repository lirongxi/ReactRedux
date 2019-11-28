import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    //获取添加参数
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    //点击添加参数
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        if (newState.inputValue !== "") {
            newState.list.push(newState.inputValue);
        } else {
            alert('不能提交空数据！');
            return;
        }
        newState.inputValue = '';
        return newState;
    }
    //点击删除参数
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}