import React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import { useTheme } from "../themetoggle/ThemeContext"; //import theme
import { styles } from "../../styles/Skills";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Skills = () => {
  const { theme } = useTheme(); // export theme from ThemeContext

return (
<View style={[styles.skillsContainer, { borderColor: theme === "dark" ? "white" : "black" }, theme === "dark" && styles.dark ]}>
        <View style={styles.skillsIconWithTitle}>
          <Icon name="tools" size={20} color={theme === "dark" ? "#fff" : "#333"} />
          <Text style={[styles.skillsTitle, theme === "dark" && styles.darkText]}>Skills</Text>
        </View>
        <View style={styles.parentEachSkill}>
          <View style={styles.eachSkill}>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>C++</Text>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>Python</Text>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>HTML</Text>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>CSS</Text>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>Javascript</Text>
          </View>
          <View style={styles.eachSkill}>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>Problem Solving</Text>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>Data Entry</Text>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>React</Text>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>React Native</Text>
            <Text style={[styles.skillsText,{ borderColor: theme === "dark" ? "white" : "black" },theme === "dark" && styles.darkText]}>UI/UX Design</Text>
          </View>
        </View>
</View>
);

};

export default Skills;