function toggleblock(id) {
  var el = document.getElementById(id);
  el.style.display = (el.style.display === 'none') ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  var btnSelected = document.getElementById('btn-selected');
  var btnAll = document.getElementById('btn-all');
  var pubItems = document.querySelectorAll('.pub-item');

  function showSelected() {
    pubItems.forEach(function (el) {
      el.style.display = el.classList.contains('pub-selected') ? '' : 'none';
    });
    btnSelected.classList.add('active');
    btnAll.classList.remove('active');
  }

  function showAll() {
    pubItems.forEach(function (el) {
      el.style.display = '';
    });
    btnAll.classList.add('active');
    btnSelected.classList.remove('active');
  }

  if (btnSelected) btnSelected.addEventListener('click', showSelected);
  if (btnAll) btnAll.addEventListener('click', showAll);

  showSelected();
});
