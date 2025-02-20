import React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import { useTheme } from "../themetoggle/ThemeContext"; //import theme
import { styles } from "../../styles/Footer";

const Footer = () => {
  const { theme } = useTheme(); // export theme from ThemeContext

return(
<View style={[styles.footerContainer, theme === "dark" && styles.dark]}>
<View style={{ height: 1, backgroundColor: theme === "dark" ? "white" : "black", marginVertical: 10 }}/>
<Text style={[styles.footerText, theme === "dark" && styles.darkText]}>© 2025 Jiro Rafael Layug. All Rights Reserved.</Text>
  </View>
    );

};

export default Footer;