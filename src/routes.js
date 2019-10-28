import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  }),
);
