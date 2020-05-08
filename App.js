import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {  // style prop is basically set to the styles.container object
  const [todos, setTodos] = useState([
    { text: 'buy milk', key: 1}, 
    { text: 'make apps', key: 2},
    { text: 'play cod', key: 3}
  ]);

  const pressHandler = (key) => {
    
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3 ){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }
    else{ 
      Alert.alert('Fam', 'its gotta be longer than 3 characters', [
        {text: 'aii bet', onPress: () => console.log('alert closed')}
      ] )
    }
    }



  return (
   // <Sandbox />
  <TouchableWithoutFeedback onPress = {() => {
    Keyboard.dismiss(); 
    console.log('keyboard is gone g')
  } }>
    <View style={styles.container}> 
    <Header />
      <View style = {styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style = {styles.list}>
          <FlatList 
          data = {todos}
          renderItem={({item}) => (
            <TodoItem item ={item} pressHandler = {pressHandler}/>
          )}
          />
        </View>
      </View>
    </View> 
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: { 
    padding: 40, 
    flex: 1
  },
  list: { 
    flex: 1,
    marginTop: 20, 
  }
});
