import React from "react";
import { SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
//redux
import { connect } from "react-redux";
import { getBrewery } from "../redux/actions/breweryAction";

class ListPage extends React.Component {
  componentDidMount() {
    this.props.getBrewery();
  }

  render() {
    console.log("Data length: " + this.props.brewery.data.length);
    return (
      <SafeAreaView>
        <Header title="Brewery List" />
        <FlatList
          data={this.props.brewery.data}
          renderItem={({ item, index }) => (
            <ListItem
              title={item.name}
              subtitle={item.brewery_type}
              index={index + 1}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => state;
const actionCreators = {
  getBrewery: getBrewery
};
export default connect(mapStateToProps, actionCreators)(ListPage);
