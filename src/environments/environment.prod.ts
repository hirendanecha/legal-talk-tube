// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';

const frontendUrl = 'https://video.legaltalk.tube/';
const backendUrl = 'https://api.legaltalk.tube/';
const loginUrl = 'https://legaltalk.tube/login';
const logoutUrl = 'https://legaltalk.tube/logout';



export const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.legaltalk.tube',
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://facetime.tube/',
  logoutUrl: logoutUrl
};