import React from 'react'
import { FlatList, TextInput, Text, View, Button, StyleSheet } from 'react-native'
import { addNewTableMap, changeValueTableMap, deleteAllValueInMap, handleMenu } from "../redux/TableReducer"
import { connect } from 'react-redux'
// таюлица и добавление значений
const TableTask = (props) => {
  return <>
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
        marginBottom: 12,
        marginTop: 15,
      }}>

        <View style={{
            width:"100%",
            justifyContent:"space-between",
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginBottom: 3,
        }}>
          <View  style={{flexGrow:1,width:"50%", alignSelf:"flex-end",height:'50%'}}>
            {props.error ? <Text style={{color:"red",}}>Значение не заполнено</Text> : <Text></Text>}
          </View>
          <View style={styles.btBorderMenu}>
            <Button
              title="Меню"
              color="#ed2626"
              onPress={props.handleMenu} />
          </View>
        </View>

        <TextInput
          style={props.error ? styles.borderInputRed : styles.borderInput}
          placeholder="Введите значение"
          onChangeText={(text) => props.changeValueTableMap(text)}
          value={props.valueTabelMap}
        />
        <View style={styles.btBorder}>
          <Button
            title="Добавить"
            color="#28c479"
            onPress={props.addNewTableMap} />
        </View>
        <View style={styles.btBorder}>
          <Button
            title="Обнулить"
            color="#ed2626"
            onPress={props.deleteAllValueInMap} />
        </View>

      </View>

      <FlatList
        style={styles.list}
        data={props.tableMap.reverse()}
        renderItem={({ item }) => <Text style={styles.listItems}>{item.text} </Text>}
      />
    </View>
  </>
}

// подключение к state  redux
let mapState = (state) => {
  return {
    ...state.table
  }
}

export default connect(mapState,
  {
    addNewTableMap,
    changeValueTableMap,
    deleteAllValueInMap,
    handleMenu
  })(TableTask)

//Стиль таблицы
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#c8ccd0'
  },
  list: {
    flex: 0.65,
    width: "80%",
    maxHeight: "80%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor:'#efeeee',
  },
  listItems: {
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor:'white',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  btBorder: {
    borderWidth: 1,
    borderColor: '#d6d7da',
    borderRadius: 10,
    backgroundColor: '#2f2d2f',
    marginTop: 10,
  },
  btBorderMenu: {
    borderWidth: 1,
    borderColor: '#d6d7da',
    borderRadius: 10,
    backgroundColor: '#2f2d2f',
    marginTop: 10,
    justifyContent: 'flex-end',
    width:"30%",
  },
  borderInput: {
    height: 35,
    flexGrow: 1,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor:'#efeeee',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  borderInputRed: {
    height: 35,
    flexGrow: 1,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ed2626',
    backgroundColor:'#efeeee',
    paddingHorizontal: 10,
    fontSize: 16,
  },

});