import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ListItem({ index, title, subtitle, onPress }) {
  return (
    <TouchableOpacity
      style={styles.itemView}
      onPress={onPress}
      activeOpacity={1}>
      <View style={styles.numberView}>
        <Text style={styles.titleText}>{index}.</Text>
      </View>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemView: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row"
  },
  numberView: {
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 16
  },
  titleText: {
    fontSize: 16,
    color: "#000000"
  },
  subtitleText: {
    fontSize: 12,
    color: "#7a7a7a"
  }
});
