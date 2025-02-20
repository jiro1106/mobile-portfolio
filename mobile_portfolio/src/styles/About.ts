import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
// about part
dark: { 
    backgroundColor: "moon" 
}, 

darkText: {
    color: "#fff" 
}, 

aboutContainer:{
    flex:1,
    gap:10,
    marginHorizontal:30,
    borderWidth:1,
    borderRadius:10,
    padding:15,
    marginTop:5,
    marginBottom:10,
},
aboutIconWithTitle:{
    flexDirection:'row',

},
aboutTitle:{
    fontFamily:'Helvetica',
    fontSize:20,
    fontWeight:800,
    marginLeft:5,
},
aboutText:{
    marginTop:5,
    fontFamily:'Helvetica',
    fontSize:17,
    fontWeight:400,
}
});