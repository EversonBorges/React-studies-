import React, {useState} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITarefa } from '../types/tarefa';
import  style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selected, setSelected] = useState<ITarefa>();
  
  function selectTask(taskSelected: ITarefa){
    setSelected(taskSelected);
    setTarefas(oldTasks => oldTasks.map(task => ({
      ...task,
      selecionado: task.id === taskSelected.id ? true : false
    })))
  }

  return (
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <List 
          tarefas={tarefas} 
          selectTask={selectTask}
        />
        <Stopwatch />
      </div>
  );
}

export default App;
