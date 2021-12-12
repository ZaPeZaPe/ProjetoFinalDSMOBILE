import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista de Tarefas">
        <Stack.Screen
          name = "Lista de Tarefas"
          component={Task}
          options={{
            headerTintColor:"#6370F4",
            headerStyle: { backgroundColor: "#202225" }
          }}
        />
        <Stack.Screen
          name = "Nova Tarefa"
          component={NewTask}
          options={{
            headerTintColor:"#6370F4",
            headerStyle: { backgroundColor: "#202225" }
          }}
        />
        <Stack.Screen
          name = "Detalhes"
          component={Details}
          options={{
            headerTintColor:"#6370F4",
            headerStyle: { backgroundColor: "#202225" }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
