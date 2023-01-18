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

  function finalizarTarefa() {
    if(selected) {
      setSelected(undefined);
      setTarefas(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id){
          return{
            ...task,
            selecionado: false,
            completado: true
          }
        }
        return task;
      }))
    }

  }

  return (
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <List 
          tarefas={tarefas} 
          selectTask={selectTask}
        />
        <Stopwatch selected={selected} finalizarTarefa={finalizarTarefa}/>
      </div>
  );
}

export default App;
