import $ from 'jquery';
import axios from 'axios';
import nature from '../../images/nature.jpg';

const natureImg = () => {
  $('#title-image').css('background-image', `url(${nature})`);
};
// $('myObject').css('background-image', 'url(' + imageUrl + ')');

const projectsAxios = () => axios.get('http://localhost:3003/projects');

export default { projectsAxios, natureImg };
