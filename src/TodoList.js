import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeVal = this.changeVal.bind(this);

        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        //关键代码-----------end

        store.subscribe(this.storeChange);
    }
    changeVal(e) {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        };
        store.dispatch(action);
    }
    storeChange() {
        this.setState(store.getState());
    }
    clickBtn() {
        const action = { type: ADD_ITEM };
        store.dispatch(action);
    }
    deleteItem(index) {
        const action = { type: DELETE_ITEM, index };
        store.dispatch(action);
    }
    render() {
        return (
            <div style={{width:'600px',marginLeft:'20px'}}>
	            <div style={{margin:'20px auto'}}>
	        		<Input placeholder='Write Something' value={this.state.inputValue} style={{ width:'250px',marginRight:'10px'}} onChange={this.changeVal}/>
	        		<Button type='primary' onClick={this.clickBtn}>添加</Button>
	        	</div>
	        	<div>
	        		<List 
        			bordered
                    dataSource={this.state.list}
                    renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)} />
	        	</div>
        	</div>
        );
    }
};

export default TodoList;