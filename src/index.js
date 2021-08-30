/* eslint no-unused-vars: 0 */
import _ from 'lodash';
import sendApi from './sendData';
import populate from './populate';
import './style.css';

const form = document.getElementById('form');
const sub = document.getElementById('submit');
const ref = document.getElementById('refresh');

sub.addEventListener('click', () => {
  const name = form.name.value;
  const score = form.score.value;
  sendApi(name, score);
});

ref.addEventListener('click', () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lRWV4oLNs6pIEv70BwVZ/scores/', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => populate(json));
});
