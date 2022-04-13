import getData from './getData.js';

const load = async () => {
  try {
    const $adviceId = document.querySelector('.advice-id');
    const $adviceQuote = document.querySelector('.advice-quote');
    const data = await getData();
    const { id, advice } = data.slip;

    $adviceId.innerHTML = `Advice ${id}`;
    $adviceQuote.innerHTML = advice;
  } catch (err) {
    console.error(err);
  }
};

await load();

const $reloadBtn = document.querySelector('#reload');
$reloadBtn.addEventListener('click', load);
