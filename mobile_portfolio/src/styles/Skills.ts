import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
// skills part
dark: { 
    backgroundColor: "moon" 
}, 

darkText: {
    color: "#fff" 
}, 

skillsContainer:{
    marginTop:25,
    flex:1,
    gap:10,
    marginHorizontal:30,
    borderWidth:1,
    borderRadius:10,
    padding:20,
},

skillsIconWithTitle:{
    flexDirection:'row',

},
skillsTitle:{
    fontFamily:'Helvetica',
    fontSize:20,
    fontWeight:800,
    marginLeft:5,
},

parentEachSkill:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:"flex-start",
    gap:15,
},

eachSkill:{
    flexDirection:'column',
    width:'45%',
    gap:10,
    
},
skillsText:{
    marginTop:5,
    fontFamily:'Helvetica',
    fontSize:15,
    fontWeight:400,
    borderWidth:1,
    padding:8,
    borderRadius:10,
    textAlign:'center',
}
});