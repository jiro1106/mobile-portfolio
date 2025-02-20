import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    //first part
    mainDeetsContainer: { 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start', 
        padding: 20, 
        backgroundColor: "#fff", 
        marginHorizontal:20,
    },

    dark: { 
        backgroundColor: "moon" 
    }, 

    name: {
        textAlign:'center',
        fontFamily:'Helvetica',
        fontSize: 27, 
        fontWeight:800,
        color: "#000",
    },

    darkText: {
        color: "#fff" 
    }, 

    profile:{
        resizeMode:'cover',
        width:'40%',
        height:140,
        borderRadius:15,
    },
    detailsContainer:{
        flexDirection:'column',
        gap:10,
        justifyContent:'center',
        alignItems:'flex-start',
        marginLeft:15,
    },
    locationIcon:{  
        marginLeft:-5,
    },
    locationText: {
        fontFamily:'Helvetica',
        textAlign:'center',
        fontSize: 18, 
        fontWeight:300,
        marginLeft:8,
    },
    locContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    eduContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    
    eduIcon:{  
        marginLeft:-5,
    },

    eduText:{
        fontFamily:'Helvetica',
        fontSize:16,
        fontWeight:300,
        marginLeft:8,
    },
});