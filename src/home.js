// src/Home.js
import React from 'react';
import EmployeeList from './EmployeeList';
import ParentComponent from './ParentComponent';
import LifecycleDemo from './LifecycleDemo';
import EventExample from './EventExample';
import Counter from './usestate';
import Reducer from './Reducer';
import ItemList from './ItemList';

const home = () => {

 
  return (
    <div className="container mt-5">
      <h1>Welcome to MyApp</h1>
      <div className='row'>
        <div className='col-sm-6'>
          <div className="card">
            <div className="card-header">EmployeeList</div>
            <div className="card-body">
              <EmployeeList />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6'>
          <div className="card">
            <div className="card-header">React State & Props</div>
            <div className="card-body">
              <ParentComponent />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div className="card">
            <div className="card-header">Lifecycle of React Components</div>
            <div className="card-body">
              <LifecycleDemo />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div className="card">
            <div className="card-header">React Events</div>
            <div className="card-body">
              <EventExample />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div className="card">
            <div className="card-header">Use State</div>
            <div className="card-body">
              <Counter />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div className="card">
            <div className="card-header">Use Reducer</div>
            <div className="card-body">
              <Reducer />  
            </div> 
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
        <div className="card">
            <div className="card-header">Flux</div>
            <div className="card-body">
            Flux 
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
