import React from 'react';
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { useTheme } from "../themetoggle/ThemeContext"; //import theme
import { styles } from "../../styles/Contact";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LogoIcon from "react-native-vector-icons/FontAwesome"; // or use other icon sets


const Contact = () => {
  const { theme } = useTheme(); // export theme from ThemeContext

const openLinkedIn = () => {
      Linking.openURL('https://www.linkedin.com/in/jiro-rafael-layug-b93b33320/');
}

const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/jirorxfael/?hl=en');
}

const openGithub = () => {
    Linking.openURL('https://github.com/jiro1106');
}
return (
<View style={[styles.contactContainer, { borderColor: theme === "dark" ? "white" : "black" }, theme === "dark" && styles.dark ]}>
        <View style={styles.IconWithTitle}>
          <Icon name="phone" size={20} color={theme === "dark" ? "#fff" : "#333"} />
          <Text style={[styles.Title, theme === "dark" && styles.darkText]}>Contact</Text>
        </View>
        <TouchableOpacity style={[styles.emailContainer,{ borderColor: theme === "dark" ? "white" : "black" }]}>
            <Text style={[styles.subTitle, theme === "dark" && styles.darkText]}>Email</Text>
            <Text style={[styles.email, theme === "dark" && styles.darkText]}>jirorafaellayug3@gmail.com</Text>
        </TouchableOpacity>

        <View style={styles.IconWithTitle}>
          <LogoIcon name="user" size={20} color={theme === "dark" ? "#fff" : "#333"} />
          <Text style={[styles.Title, theme === "dark" && styles.darkText]}>Social Links</Text>
        </View>
        <View style={styles.socialLinks}>
            <TouchableOpacity onPress={openGithub} style={[styles.socialLinkContainer,{ borderColor: theme === "dark" ? "white" : "black" }]}>
                <LogoIcon name="github" size={40} color={theme === "dark" ? "#fff" : "#333"}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={openLinkedIn} style={[styles.socialLinkContainer,{ borderColor: theme === "dark" ? "white" : "black" }]}>
                <LogoIcon name="linkedin-square" size={40} color={theme === "dark" ? "#fff" : "#333"}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={openInstagram} style={[styles.socialLinkContainer,{ borderColor: theme === "dark" ? "white" : "black" }]}>
                <LogoIcon name="instagram" size={40} color={theme === "dark" ? "#fff" : "#333"}/>
            </TouchableOpacity>
        </View>
</View>
);

};

export default Contact;