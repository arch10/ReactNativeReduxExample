import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";

function DetailsPage({ navigation }) {
  const name = navigation.getParam("name", "ANN");
  return (
    <SafeAreaView>
      <Header title="Brew Details" onBackPress={() => navigation.goBack()} />
      <View>
        <View style={{ flexDirection: "row", padding: 16 }}>
          <Text style={{ fontSize: 16 }}>Name:</Text>
          <Text
            style={{
              fontSize: 14,
              marginStart: 8,
              flex: 1
            }}>
            {name}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailsPage;
