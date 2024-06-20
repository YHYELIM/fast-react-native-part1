import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

/* Header
* MyProfile
* Division
* FriendSection
 FriendList
*/

/*컴포넌트 5개로 쪼갬  */
const Header =(props)=>{
  return <Text>{props.title}</Text>;
}

const MyProfile =()=>{
  return <Profile name = "채빈" uri="https://i.pinimg.com/originals/cf/e4/fc/cfe4fc4334986a68632beea6e8eda2d0.jpg" 
  profileSize={40}></Profile>;
}


const Division =()=>{
  return <Text>Division</Text>;
}


const FriendSection =()=>{
  return <Text>FriendSection</Text>;
}


const FriendList =()=>{
  return (
  <View>
  <Profile name = "채림" uri="https://i.pinimg.com/originals/cf/e4/fc/cfe4fc4334986a68632beea6e8eda2d0.jpg" profileSize={30}/>
  <Profile name = "세인" uri= "https://i.pinimg.com/originals/cf/e4/fc/cfe4fc4334986a68632beea6e8eda2d0.jpg"profileSize={30}/>
  <Profile name = "현서" uri = "https://i.pinimg.com/originals/cf/e4/fc/cfe4fc4334986a68632beea6e8eda2d0.jpg"profileSize={30}/>
  <Profile name = "유림" uri = "https://i.pinimg.com/originals/cf/e4/fc/cfe4fc4334986a68632beea6e8eda2d0.jpg"profileSize={30}/>
  </View>
  );
};
/*텍스트는 이름 하나만  */
/*이미지의 크기지정을 해줘야 이미지가 뜬다 */
const Profile =(props)=>{
  return(
    <View style={{flexDirection:"row"}}>
      <Image source = {{uri : props.uri}}
      style={{
        width:props.profileSize,
        height:props.profileSize,
      }}
    
      />
      <Text>{props.name}</Text>
    </View>
  );
}

// class Profile extends React.Component{
//   render(){
//     return(
//       <View style={{flexDirection:"row"}}>
//       <Image source = {{uri : this.props.uri}}
//       style={{
//         width:this.props.profileSize,
//         height:this.props.profileSize,
//       }}
    
//       />
//       <Text>{this.props.name}</Text>
//     </View>
//     );

//   }

// }

//App: 최상위 컴포넌트 
/*뷰 인에 자식으로 넣어줌 */
  /* MyProfile,FriendList : 깉은 컴포넌트 사용*/
export default function App() {
  return (
    <View style={styles.container}>
    <Header title = "친구"/>
    <MyProfile/>
    <Division/>
    <FriendSection/>
    <FriendList/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
