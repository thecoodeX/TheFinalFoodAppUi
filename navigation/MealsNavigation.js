import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Menu from '../screens/Menu';
import Details from '../screens/Details';
import CategoryScreen from '../screens/CategoryScreen';
import Favourites from '../screens/Favourites';
import Filter from '../screens/Filter';
import Order from '../screens/Order';


const MealsNavigation = createStackNavigator({
    Menu: Menu,
    Deatails: Details,
    CategoryScreen: CategoryScreen,
    Favourites: Favourites,
    Filter: Filter,
    Order: Order

}, {
    initialRouteKey: Menu,
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#00e676',
            borderTopColor: '#0026ca',


        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'


    }
});


export default createAppContainer(MealsNavigation);