import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feed } from "./src/Feed";
import List from "./src/list";

import { useState } from 'react'

export default function App() {
  const [feed, seFeed] = useState(Feed)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>alert('voltar para Home')}>
        <Image 
         source={require('./src/img/logo.png')}
         style={styles.logo}
        />
        </TouchableOpacity>

         <TouchableOpacity onPress={()=>{alert("direct")}}>
          <Image 
         source={require('./src/img/send.png')}
         style={styles.send}
        
        />
        </TouchableOpacity>
         
      </View>

     <FlatList 
     showsHorizontalScrollIndicator={false}
     data={feed}
     keyExtractor={(item)=> item.id}
      renderItem={({item})=> <List data={item} />}
     />
     <StatusBar style="dark"/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
      heigth: 55,
      marginTop: 30,
      border: 'none',
      padding: 10,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: "space-between",
      borderBottomWidth: 0.2,
      shadowColor: '#000',
      elevation: 1
  },
  send: {
      width: 26,
      height: 26
  }
});
