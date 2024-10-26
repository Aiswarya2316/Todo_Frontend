import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


function App(){
    return(
        <div className="App">
            <h1>Todo App</h1>
            <a href="./components/AddTask"></a>
            <AddTask />
            <TaskList />
        </div>
    );
}

export default App;
