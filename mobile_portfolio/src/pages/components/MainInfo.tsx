import React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import { useTheme } from "../themetoggle/ThemeContext"; //import theme
import { styles } from "../../styles/MainInfo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MainInfo = () => {
  const { theme } = useTheme(); // export theme from ThemeContext

return(
<View style={[styles.mainDeetsContainer, theme === "dark" && styles.dark]}>
        <Image source={require("../../../assets/profile2.png")} style={styles.profile} />
        <View style={styles.detailsContainer}>
          <Text style={[styles.name, theme === "dark" && styles.darkText]}>Jiro Rafael Layug</Text>
          <View style={styles.locContainer}>
            <Icon name="map-marker" style={styles.locationIcon} size={23} color={theme === "dark" ? "#fff" : "#333"} />
            <Text style={[styles.locationText, theme === "dark" && styles.darkText]}>Batangas, Philippines</Text>
          </View>
          <View style={styles.eduContainer}>
           <Icon name="school" style={styles.eduIcon} size={23} color={theme === "dark" ? "#fff" : "#333"} />
           <Text style={[styles.eduText, theme === "dark" && styles.darkText]}>BS Computer Science</Text>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "black", marginVertical: 10 }} />
  </View>
    );

};

export default MainInfo;