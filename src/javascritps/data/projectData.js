import axios from 'axios';

const projectsAxios = () => axios.get('http://localhost:3003/projects');

export default { projectsAxios };
