import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollViewComponent, ScrollView, TextInput } from 'react-native';


export default class MainScreen extends React.Component{
  render(){
    return (
    <View style={styles.container}>
     
     <View style={styles.header}>
       <Text style={styles.headerTxt}>- NOTER -</Text>
     </View>
     <ScrollView style={styles.scrollContainer}>
    

       </ScrollView>
    <View style={styles.viewTagTwo}>
      <TextInput styles={styles.textInput} placeholder='New Note' placeholderTextColor='cream'>
       
      </TextInput>
      </View> 
      <TouchableOpacity styles={styles.touchableOP}>
      <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7edca', 
  },
  header:{
  backgroundColor:'brown',
  allingItems:'center',
  justifyContent:'center',
  borderBottomWidth:10,
  borderBottomColor:'yellow'
  },
  headerTxt: {
  color:'darkBrown',
  fontSize:18,
  padding:25,
  },
  viewTagTwo: {
  backgroundColor:''
  },
  textInput: {
  padding:5,
  margin:7,
  borderColor:'red',
  width: 80,
  height: 20,
  },
  touchableOP: {
  position:'absolute',
  bottom:90,
  right:20,
  width:90,
  height:90,
  backgroundColor:'#BFFF00',
  allingItems:'center',
  borderRadius:50,
  justifyContent:'center'
  },
  plus: {
  color:'#ffd700',
  fontSize:30,
  },
  scrollContainer:{
    flex:1,
    marginBottom:100
  }
});