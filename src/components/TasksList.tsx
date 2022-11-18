import React from 'react';
import { FlatList, Image, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { Feather } from '@expo/vector-icons';


import { ItemWrapper } from './ItemWrapper';
import  clipBoard  from '../assets/images/logo/Clipboard.png'

import trashIcon from '../assets/icons/trash/trash.png'

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
      <View style={styles.noTasks}>
        <Image style={styles.image} source={clipBoard}/>
        <Text style={styles.noTasksText}>
        Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.tasksSub}>
        Crie tarefas e organize seus itens a fazer
        </Text>
        </View>
      )}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.taskButton}
                //TODO - use onPress (toggle task) prop
                onPress={() => toggleTaskDone(item.id)}
              >
                <View 
                  //TODO - use style prop 
                  style={
                    item.done 
                    ? styles.taskMarkerDone
                    : styles.taskMarker
                  }
                >
                  { item.done && (
                    <Feather 
                      name="check"
                      size={12}
                      color="#F2F2F2"
                    />
                  )}
                </View>

                <Text 
                  //TODO - use style prop
                  style={
                    item.done 
                    ? styles.taskTextDone
                    : styles.taskText
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{ paddingHorizontal: 17.52 }}
              //TODO - use onPress (remove task) prop
              onPress={() => removeTask(item.id)}
            >
              <Image source={trashIcon} />
            </TouchableOpacity>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 15.52,
    paddingVertical: 15,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 17.45,
    width: 17.45,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    marginRight: 11.27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskText: {
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
    fontSize:14,
  },
  taskMarkerDone: {
    height: 17.45,
    width: 17.45,
    borderRadius: 999,
    backgroundColor: '#5E60CE',
    marginRight: 11.27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_500Medium'
  },
  noTasks:{
    borderTopWidth: 1,
    paddingTop: 48,
    borderTopColor:'#333333',
    alignItems:'center',
    marginHorizontal:24
  },
  noTasksText:{
    color:'#808080',
    fontSize:14,
    fontFamily:'Inter_700Bold',
  },
  tasksSub:{
    color:'#808080',
    fontSize:14,
    fontFamily:'Inter_400Regular',
  },
  image:{
    marginBottom:16
  }
})