import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps184596Navigator from '../features/Maps184596/navigator';
import Additem184595Navigator from '../features/Additem184595/navigator';
import Maps184591Navigator from '../features/Maps184591/navigator';
import UserProfile184587Navigator from '../features/UserProfile184587/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps184596: { screen: Maps184596Navigator },
Additem184595: { screen: Additem184595Navigator },
Maps184591: { screen: Maps184591Navigator },
UserProfile184587: { screen: UserProfile184587Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
