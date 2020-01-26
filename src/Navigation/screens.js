import {Navigation} from 'react-native-navigation';
import Home from '../screens/Home';
import PushedScreen from '../screens/PushedScreen';
import ModalScreen from '../screens/ModalScreen';
import Albums from '../screens/Albums';
import Photos from '../screens/Photos';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';

export function registerScreens(provider, store) {
  Navigation.registerComponentWithRedux('HomeScreen', () => Home, provider, store);
  Navigation.registerComponentWithRedux('Posts', () => Posts, provider, store);
  Navigation.registerComponentWithRedux('PostDetail', () => PostDetail, provider, store);
  Navigation.registerComponentWithRedux('Albums', () => Albums, provider, store);
  Navigation.registerComponentWithRedux('Photos', () => Photos, provider, store);
  Navigation.registerComponentWithRedux('PushedScreen', () => PushedScreen, provider, store);
  Navigation.registerComponentWithRedux('ModalScreen', () => ModalScreen, provider, store);
}
