import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Header from "../components/Header";

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const url = "https://api.openbrewerydb.org/breweries";
    try {
      const response = await fetch(url);
      const body = await response.json();
      this.setState({ data: body });
    } catch (error) {
      console.log("An error occured while getting data.");
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Header title="Brewery List" />
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <ListItem
              title={item.name}
              subtitle={item.brewery_type}
              index={index + 1}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default ListPage;
