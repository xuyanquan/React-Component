import React, { Component } from 'react'
import Button from './cpt/Button'
import Input from './cpt/Input'
import Tabs from './cpt/Tabs'
import Tab from './cpt/Tab'
import Table from './cpt/Table'
import Form from './cpt/Form'
import Modal from './cpt/Modal'
import Toast from './cpt/Toast'
import './App.css'


const TableColumns = [
  {title: '姓名', field: 'name'},
  {title: '年龄', field: 'age'},
  {title: '性别', field: 'sex'},
  {title: '操作', render(row) {
    return <span style={{cursor: 'pointer', color: 'red'}} onClick={() => alert(`删除第${row.id}条`)}>删除</span>
  }}
]
const TableData = [
  {id: 1,name: 'Henry', age: 28, sex: 'male'},
  {id: 2,name: 'Henry', age: 28, sex: 'male'},
  {id: 3,name: 'Henry', age: 28, sex: 'male'},
  {id: 4,name: 'Henry', age: 28, sex: 'male'},
  {id: 5,name: 'Henry', age: 28, sex: 'male'}
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <div className="App">
        <Button>我是按钮</Button>
        <hr/>
        <Input />
        <hr />
        <Tabs>
          <Tab title="Tab1">1</Tab>
          <Tab title="Tab2">2</Tab>
          <Tab title="Tab3">3</Tab>
        </Tabs>
        <hr />
        <Table columns={TableColumns} data={TableData} />
        <hr />
        <div style={{ width: 300 }}>
          <Form onConfirm={() => {}} onCancel={() => {}}>
            <Form.Item title="姓名" required><Input /></Form.Item>
            <Form.Item title="年龄" required><Input /></Form.Item>
          </Form>
        </div>
        <hr />
        <Button onClick={() => {this.setState({visible: true})}}>Show Modal</Button>
        <Modal visible={this.state.visible}><h1>sdf</h1></Modal>
        <hr />
        <Button onClick={() => { Toast.success('toast show info') }}>Toast</Button>
      </div>
    );
  }
}

export default App;
