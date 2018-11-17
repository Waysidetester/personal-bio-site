import $ from 'jquery';
import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';
import nature from '../../images/nature.jpg';

const baseUrl = apiKeys.config.databaseURL;

const natureImg = () => {
  $('#title-image').css('background-image', `url(${nature})`);
};
// $('myObject').css('background-image', 'url(' + imageUrl + ')');

const projectsAxios = () => axios.get(`${baseUrl}/projects.json`);

export default { projectsAxios, natureImg };
