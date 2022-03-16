const toggles = document.querySelectorAll('.toggle');
const career = document.querySelector('#career');
const sleep = document.querySelector('#sleep');
const social_life = document.querySelector('#social-life');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => youOnlyGetTwo(e.target))
);

function youOnlyGetTwo(theClickedOne) {
  if (career.checked && sleep.checked && social_life.checked) {
    if (career === theClickedOne) {
      social_life.checked = false;
    }

    if (sleep === theClickedOne) {
      career.checked = false;
    }

    if (social_life === theClickedOne) {
      sleep.checked = false;
    }
  }
}
