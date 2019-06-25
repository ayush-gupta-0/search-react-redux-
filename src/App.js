import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import DropDown from './components/DropDown';
import PageSize from './components/PageSize';
import store from './store';
import Table from './components/Table';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render(){
    return(
      <Provider store={store}>
        <div>
          <div align="center">
            <h1>Bank Branches</h1>
          </div>
          <div>
            <DropDown />
            <br />
            <br />
            <SearchBox />
            <br />
            <PageSize />
            <Table />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
