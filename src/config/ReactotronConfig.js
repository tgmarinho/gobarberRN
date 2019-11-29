import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure() // IOS assim já funciona
    // .configure({ host: '10.200.3.191' }) // android
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
