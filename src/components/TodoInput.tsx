// https://docs.expo.dev/
// https://docs.expo.dev/guides/icons/
// https://icons.expo.fyi/

import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { Feather } from '@expo/vector-icons';


interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask if task not empty and clean input value 
    if(!task)
      return;

    addTask(task);
    setTask('');

  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        maxLength={28}
        style={styles.input} 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        returnKeyType="send"
         selectionColor="#F2F2F2"
        //TODO - use value, onChangeText and onSubmitEditing props
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        //TODO - onPress prop
        onPress={handleAddNewTask}
      >
        <Feather name="plus-circle" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: -32,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 54,
    with:271,
    paddingHorizontal: 16,
    backgroundColor: '#262626',
    borderRadius:6,
    fontSize: 16,
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
    marginRight: 4
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    height: 54,
    width:54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:6,
    },
});