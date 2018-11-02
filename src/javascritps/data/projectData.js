import $ from 'jquery';

const projectsAjax = () => new Promise((resolve, reject) => { $.get('http://localhost:3003/projects').done((data) => { resolve(data); }).fail((error) => { reject(error); }); });

export default { projectsAjax };
