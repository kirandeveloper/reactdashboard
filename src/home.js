// src/Home.js
import React from 'react';
import EmployeeList from './EmployeeList';
import ParentComponent from './ParentComponent';
import LifecycleDemo from './LifecycleDemo';
import EventExample from './EventExample';
import Counter from './usestate';
import Reducer from './Reducer';

const home = () => {

 
  return (
    <div className="container mt-5">
      <h1>Welcome to MyApp</h1>
      <div className='row'>
        <div className='col-sm-6'>
          <div class="card">
            <div class="card-header">EmployeeList</div>
            <div class="card-body">
              <EmployeeList />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6'>
          <div class="card">
            <div class="card-header">React State & Props</div>
            <div class="card-body">
              <ParentComponent />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div class="card">
            <div class="card-header">Lifecycle of React Components</div>
            <div class="card-body">
              <LifecycleDemo />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div class="card">
            <div class="card-header">React Events</div>
            <div class="card-body">
              <EventExample />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div class="card">
            <div class="card-header">Use State</div>
            <div class="card-body">
              <Counter />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div class="card">
            <div class="card-header">Use Reducer</div>
            <div class="card-body">
              <Reducer />  
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
