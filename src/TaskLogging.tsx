import React from 'react';
import Header from './Header';
import Content from './Content';

const TaskLogging: React.FC = () => 
{
  return (
    <div className="notificationsFrame">
      <div className="panel">
        <Header title='Registro de tareas'/>
        <Content/>
      </div>
    </div>
  );
}

export default TaskLogging;
