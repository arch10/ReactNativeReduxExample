import React from "react";
import { SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import Header from "../components/Header";

class ListPage extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header title="Brewery List" />
        <ListItem
          title="Avondale Brewing Co"
          subtitle="micro"
          index={1}
        />
        <ListItem
          title="Trim Tab Brewing"
          subtitle="micro"
          index={2}
        />
        <ListItem
          title="Yellowhammer Brewery"
          subtitle="micro"
          index={3}
        />
      </SafeAreaView>
    );
  }
}

export default ListPage;
