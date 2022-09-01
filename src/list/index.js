import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'

export default function List({data}) {
  const [likeada, setlikeada] = useState(data.likeada)
  const [curtidas, setCurtidas] = useState(data.likers)
  const mostrarLike = (curtidas)=>{
      if(curtidas <= 0){
        return
      }
      return <Text style={styles.likers}>{curtidas} {curtidas > 1 ? 'curtidas' : 'curtida'}</Text>
  }
  const like = (likeada)=>{
   if(likeada === true){
       setlikeada(false)
       setCurtidas(curtidas - 1)
   }else{
    setlikeada(true)
    setCurtidas(curtidas + 1) 
   }
  }
  return (
    <View style={styles.areaFeed}>
     <View style={styles.viewPerfil}>
      <Image
      source={{uri: data.imgperfil}}
      style={styles.fotoPerfil}
      />
      <Text style={styles.nomeUsuario}>{data.nome}</Text>
     </View>
     <Image
     resizeMode="cover"
     style={styles.fotoPublicacao}
     source={{uri: data.imgPublicacao}}
     />

    <View style={styles.areaBtn}>
      <TouchableOpacity onPress={()=>like(likeada)}>
        {likeada === false ? 
        <Image
        source={require('../img/like.png')}
        style={styles.iconeLike}
        /> :  
        <Image
        source={require('../img/likeada.png')}
        style={styles.iconeLike}
        />
        }
      </TouchableOpacity>

       <TouchableOpacity style={styles.btnSend}>
        <Image
        source={require('../img/send.png')}
        style={styles.iconeLike}
        />
      </TouchableOpacity>
    </View>

    {mostrarLike(curtidas)}


    <View style={styles.viewRodape}>
      <Text style={styles.nomeRodape}>{data.nome}</Text>
      <Text style={styles.descRodape}>{data.descricao}</Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  areaFeed:{

  },
  viewPerfil: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      padding: 8
  },
  fotoPerfil: {
    height: 40,
    width: 40,
    borderRadius: 25
  }, 
  nomeUsuario: {
    fontSize: 20,
    textAlign: 'left',
    color: '#000',
    paddingStart: 10
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5
  },
  iconeLike: {
    width: 33,
    height: 33
  },
  btnSend: {
    paddingLeft: 10
  },
  viewRodape: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  nomeRodape: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingLeft: 8
  },
  descRodape: {
      paddingLeft: 8,
      fontSize: 15,
      color: "#000"
  },
  likers: {
    fontWeight: 'bold',
    paddingLeft: 8
  }
})