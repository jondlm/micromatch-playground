import m from 'micromatch';

const pattern = document.querySelector('#pattern');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const errors = document.querySelector('#errors');

function handleChange(event) {
  try {
    output.innerText = m.isMatch(input.value, pattern.value);
    errors.innerText = '';
  } catch (e) {
    output.innerText = '';
    errors.innerText = e;
  }
}

input.addEventListener('keyup', handleChange);
pattern.addEventListener('keyup', handleChange);

//console.log(m.isMatch('/line-item/advertiser/3272685/line-item/create', '/line-item/advertiser/*/line-item/create'));
