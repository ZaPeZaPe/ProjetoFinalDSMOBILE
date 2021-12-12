import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import database from "../../config/firebaseconfig"


export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const idTask = route.params.id;

  function editTask(description, id){
    database.collection("Tasks").doc(id).update({
      description: descriptionEdit
    })
    navigation.navigate("Lista de Tarefas");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Editar detalhes</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Ex: Tarefa modificada..."
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={()=> {
          editTask(descriptionEdit, idTask)
        }}
      >
        <Text style={styles.iconButton}> ✓ </Text>
      </TouchableOpacity>
    </View>
  );
}
