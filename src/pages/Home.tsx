import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';
import { TasksInfo } from '../components/TasksInfo';

export function Home() {
  const [total, setTotal] = useState<number>(0)
  const [tasks, setTasks] = useState<Task[]>([]);
  // console.log(tasks.length);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    setTasks(oldTasks => [...oldTasks, newTask])
  }

  function handleToggleTaskDone(id: number) {
      //TODO - toggle task done if exists
      const updatedTasks = tasks.map(task => ({ ...task }))
      const tasksProgress = updatedTasks.find(task => task.id == id)
      if(!tasksProgress)
        return
        tasksProgress.done = !tasksProgress.done
      setTasks(updatedTasks)
      
       const total = updatedTasks.reduce((total, {done}) =>{
          if(done){
            return total + 1
          }else{
            return total - 0
          }
       },0)
       setTotal(total)}

  function handleRemoveTask(id: number, title:string) {
    //TODO - remove task from state
    Alert.alert(
      "Excluir Tarefas",
      "Deseja Exluir Essa Tarefa",
      [{
        text: "Cancelar",
        style: "destructive",
      },
      {
        text: "Excluir",
        onPress: () =>  {
          const removeTasks = tasks.filter(task => task.id !== id)
          setTasks(removeTasks)
          const total = removeTasks.reduce(( total, {done} ) => {
          if(done){
            return total + 1
          }
          else{
            return total + 0
          }
      },0)  
      setTotal(total)
      }}
    ])
  } 

  return (
    <View style={styles.container}>
      <Header/>
      <TodoInput addTask={handleAddTask} />
      <TasksInfo createdTasks={tasks.length} tasksCompleted={total}  />
      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:623,
    backgroundColor: '#1A1A1A'
  }
})