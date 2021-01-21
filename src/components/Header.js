import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Header({ title, onBackPress }) {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        style={styles.backView}
        onPress={onBackPress ? onBackPress : null}
        activeOpacity={1}>
        {onBackPress && (
          <Image
            source={require("../assets/images/back.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
      </TouchableOpacity>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={{ width: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#cacaca"
  },
  backView: {
    justifyContent: "center",
    alignItems: "center",
    marginStart: 16
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingStart: 16,
    paddingEnd: 16
  },
  titleText: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "600"
  }
});
