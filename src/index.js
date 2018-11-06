import './index.scss';
import 'bootstrap';
import projectComponent from './javascritps/components/projectComponent';
import projectData from './javascritps/data/projectData';

const init = () => {
  projectComponent.projectInit();
  projectData.natureImg();
};

init();
