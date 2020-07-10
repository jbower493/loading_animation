const loader = document.getElementsByClassName('loader')[0];
console.log(loader);

window.addEventListener('load', () => {
  loader.classList.add('hidden');
});