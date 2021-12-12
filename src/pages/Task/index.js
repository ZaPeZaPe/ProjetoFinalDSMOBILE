import React, { useState, useEffect } from 'react';
import {  View, Text, TouchableOpacity, FlatList } from 'react-native';
import database from "../../config/firebaseconfig";
import {  Entypo  } from "@expo/vector-icons";
import styles from "./style";

export default function Task({ navigation }) {
  const [task, setTask] = useState([])

  function deleteTask(id){
    database.collection("Tasks").doc(id).delete()
  };

  useEffect(() =>{
    database.collection("Tasks").onSnapshot((query)=> {
      const list = []
      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id })
      })
      setTask(list)
    })
  },[] )

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={( { item } )=>{
          return(
          <View style={styles.Tasks}>
            <TouchableOpacity style
              style={styles.deleteTask}
              onPress={() => {
                deleteTask(item.id)
              }}
            >
            <Entypo
              name='erase'
              size={23}
              color="#6370F4"
            >
            </Entypo>
            </TouchableOpacity>
            <Text
              style={styles.DescriptonTask}
              onPress={()=> {
                navigation.navigate("Detalhes", {
                  id: item.id,
                  description: item.description
                })
              }}
            >
              {item.description}
            </Text>

          </View>
          )
        }}
      />
      <TouchableOpacity style
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("Nova Tarefa")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
