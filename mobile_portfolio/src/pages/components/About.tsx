import React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import { useTheme } from "../themetoggle/ThemeContext"; //import theme
import { styles } from "../../styles/About";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const About = () => {
  const { theme } = useTheme(); // export theme from ThemeContext

return (
<View style={[styles.aboutContainer, { borderColor: theme === "dark" ? "white" : "black" }, theme === "dark" && styles.dark ]}>
        <View style={styles.aboutIconWithTitle}>
          <Icon name="information" size={20} color={theme === "dark" ? "#fff" : "#333"} />
          <Text style={[styles.aboutTitle, theme === "dark" && styles.darkText]}>About</Text>
        </View>
        <Text style={[styles.aboutText, theme === "dark" && styles.darkText]}>Hello, I am currently studying as a 3rd Year BS Computer Science in De La Salle Lipa. I am an aspiring web developer passionate about creating visually-appealing, user-friendly websites that
          are used in the real world. 
          </Text>
          <Text style={[styles.aboutText, theme === "dark" && styles.darkText]}>I want to focus more on creating the front-end of a website but not limited
          to as I think it gives life to websites. Lately, I have been studying Python to constantly challenge myself and improve my tech stack.
        </Text>
      </View>
);

};

export default About;