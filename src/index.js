/* eslint no-unused-vars: 0 */
import _ from 'lodash'; // eslint-disable-line
import sendApi from './sendData';
import populate from './populate';
import './style.css';
import call from './getData';
import error from './error';
import sort from './sort';

const form = document.getElementById('form');
const sub = document.getElementById('submit');
const ref = document.getElementById('refresh');

const getArr = async () => {
  const arr = await call();
  const res = arr.result;
  sort(res, 'score').reverse();
  return res;
};

sub.addEventListener('click', async () => {
  const name = form.name.value;
  const score = form.score.value;
  if (score.match(/^[0-9]+$/) == null) {
    error('Invalid input!', 'red');
  } else {
    error('Score added succesfully!', 'green');
    await sendApi(name, score);
    form.name.value = '';
    form.score.value = '';
    populate(await getArr());
  }
});

ref.addEventListener('click', async () => {
  populate(await getArr());
});

document.addEventListener('DOMContentLoaded', async () => {
  populate(await getArr());
});
