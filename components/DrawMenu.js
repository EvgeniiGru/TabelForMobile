import React from 'react' 
import { View }  from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import OffCanvas3D from './offConvas'
import TableTask from './TableTask'
import Information from './InformationProgramm'
import ExitForm from './ExitForm'

const MenuTable = (props) => {
  return <View style={{flex: 1}}>
      <OffCanvas3D
      active={props.menuOpen}
      onMenuPress={props.handleMenu}
      backgroundColor={'#222222'}
      menuTextStyles={{color: 'white'}}
      handleBackPress={true}
      menuItems={[
        {
          title: 'Menu',
          icon: <Icon name="tag" size={35} color='#ffffff' />,
          renderScene: <TableTask/>
        },
        {
            title: 'Information',
            icon: <Icon name="question" size={35} color='#ffffff' />,
            renderScene: <Information/>
          },
          {
            title: 'Exit',
            icon: <Icon name="close-o" size={35} color='#ffffff' />,
            renderScene: <ExitForm/>
          },
      ]}/>
    </View>

} 

export default MenuTable;