import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
// projects part
dark: { 
    backgroundColor: "moon" 
}, 

darkText: {
    color: "#fff" 
},

projectsContainer:{
    flex:1,
    gap:10,
    marginHorizontal:30,
    borderWidth:1,
    borderRadius:10,
    padding:15,
    marginTop:20,
    marginBottom:20,
},
projectsIconWithTitle:{
    flexDirection:'row',
    marginBottom:10,

},
projectsTitle:{
    fontFamily:'Helvetica',
    fontSize:20,
    fontWeight:800,
    marginLeft:5,
},
projectItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
  },
  projectImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  projectDetails: {
    flex: 1,
  },
  projectName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  projectDescription: {
    fontSize: 14,
    color: "#666",
  },
});
