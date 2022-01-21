import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from "./actions/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;

}

export default connect(mapStateToProps, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.