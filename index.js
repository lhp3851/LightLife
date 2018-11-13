/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Container from './base/Container';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Container);
