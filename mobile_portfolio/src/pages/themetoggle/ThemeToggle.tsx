import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../themetoggle/ThemeContext"; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, theme === "dark" && styles.darkText]}>
        {theme === "dark" ? "Dark" : "Light"}
      </Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.iconButton} >
        <Icon
          name={theme === "dark" ? "moon" : "sun"}
          size={30}
          color={theme === "dark" ? "#fff" : "#333"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center",marginRight:10, justifyContent: "flex-end" },
  label: { fontSize: 16, marginRight: 10, fontWeight:600},
  darkText: { color: "#fff" },
  iconButton: { padding: 10},
});

export default ThemeToggle;
