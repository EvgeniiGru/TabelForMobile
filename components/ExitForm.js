import React from 'react'
import { Text, View, StyleSheet, Button, BackHandler }  from 'react-native'
import { handleMenu }  from "../redux/TableReducer"
import { connect } from 'react-redux'

const ExitFrom = (props) => {
    return <View style = {styles.container}>
        <Text>Вы действительно хотите выйти?</Text>
        <View style = {styles.panelButton}>
            <View  style = {styles.btBorder}>
                <Button 
                title="ОК" 
                color = "green"
               onPress={()=> BackHandler.exitApp()}/>
             </View>
            <View  style = {styles.btBorder}>
                <Button 
                title="Отмена" 
                color = "red"
               onPress={props.handleMenu}/>
             </View>
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
  })(ExitFrom)

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
  panelButton:{
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
})