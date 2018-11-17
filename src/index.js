import './index.scss';
import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import projectComponent from './javascripts/components/projectComponent';
import projectData from './javascripts/data/projectData';
import sizing from './javascripts/components/events/sizing';
import scroll from './javascripts/components/events/scroll';

const init = () => {
  firebase.initializeApp(apiKeys.config);
  projectComponent.projectInit();
  projectData.natureImg();
  sizing.sizeInit();
  scroll.initScrolls();
};

init();
