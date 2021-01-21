import ListPage from '../pages/ListPage';
import DetailsPage from '../pages/DetailsPage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const rootStack = createStackNavigator({
  List: {
    screen: ListPage,
    navigationOptions: {
      headerShown: false
    }
  },
  Details: {
    screen: DetailsPage,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default createAppContainer(rootStack);
