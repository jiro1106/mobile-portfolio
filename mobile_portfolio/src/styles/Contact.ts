import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    // contact part
dark: { 
    backgroundColor: "moon" 
}, 

darkText: {
    color: "#fff" 
},
contactContainer:{
    marginTop:25,
    flex:1,
    gap:10,
    marginHorizontal:30,
    borderWidth:1,
    borderRadius:10,
    padding:20,
},

IconWithTitle:{
    flexDirection:'row',

},
Title:{
    fontFamily:'Helvetica',
    fontSize:20,
    fontWeight:800,
    marginLeft:10,
},
emailContainer:{
    marginTop:5,
    padding:15,
    borderRadius:10,
    borderWidth:1,
    marginBottom:15,
},

subTitle:{
    fontFamily:'Helvetica',
    fontSize:16,
    fontWeight:700,
},

email:{
    marginTop:2,
    fontFamily:'Helvetica',
    fontSize:16,
    fontWeight:400,
},

socialLinks:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

},

socialLinkContainer:{
    alignItems:'center',
    width:'30%',
    marginTop:10,
    padding:15,
    borderRadius:10,
    borderWidth:1,
    marginBottom:10,
},
});