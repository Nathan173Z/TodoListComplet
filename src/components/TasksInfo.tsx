import React from "react";
import { View, Text, StyleSheet } from 'react-native';

interface TasksInfoProgressProps { 
    createdTasks:number,
    tasksCompleted:number,
}


export function TasksInfo({createdTasks, tasksCompleted}: TasksInfoProgressProps){

    return(
        <View style={styles.containerCreated}>
            <View style={styles.containerInfoTasks}>
                <Text style={styles.textCreated}>Criadas</Text>
                <View style={styles.numberInfo}>
                    <Text style={styles.numberColor}>{createdTasks}</Text>
                </View>      
            </View>

            <View style={styles.containerInfoTasks}>
                <Text style={styles.textDone}>Concluidas</Text>
          
            <View style={styles.numberInfo}>
                <Text style={styles.numberColor}>{tasksCompleted}</Text>
            </View>
        </View>

    </View>
    )
}

const styles= StyleSheet.create({

    containerCreated:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:24,
        marginTop:32,
        alignItems:'center',
       
    },

    containerInfoTasks:{
        flexDirection:'row',
        alignItems:'baseline',
    },

    textCreated:{
        fontSize:14,
        color:'#4EA8DE',
        fontFamily: 'Inter_700Bold',
    },

    numberInfo:{
        backgroundColor:'#333333',
        alignItems:'center',
        justifyContent:'center',
        width:25,
        height:19,
        borderRadius:999,
        marginLeft:8,

    },

    numberColor:{
        color: '#D9D9D9',
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
    },

    textDone:{
        fontSize:14,
        color:'#8284FA',
        fontFamily: 'Inter_700Bold',
    },

    numberDone:{

    }

})