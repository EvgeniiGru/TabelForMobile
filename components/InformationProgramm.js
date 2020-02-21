import React from 'react'
import { Text, View, StyleSheet, Button }  from 'react-native'
import { handleMenu }  from "../redux/TableReducer"
import { connect } from 'react-redux'

const Information = (props) => {
    return <View style = {styles.container}>
            <Text> О программе</Text>
            <Text style={{width:"90%",}}>   Программа по добавлению значений в табличную часть и удалению из неё</Text>
            <View  style = {styles.btBorder}>
                <Button 
                title="Меню" 
                color = "red"
               onPress={props.handleMenu}/>
             </View>
    </View>
}

// подключение к state  redux
let mapState = (state) =>{
    return{
        ...state.table
    }
  }
  

  export default connect(mapState,
  {
  handleMenu
  })(Information)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btBorder:{
    borderWidth: 1,
    borderColor: '#d6d7da',
    borderRadius: 6,
    backgroundColor:'black',
    marginTop:10,
  },
})