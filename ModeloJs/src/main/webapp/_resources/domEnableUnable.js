function ativarDesativar(form) {

  var id = form[0].value;
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'AtivarDesativar');
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send('codigo-ativar=' + id);

    if (document.querySelector('#' + id).className == "btn-danger") {
      document.querySelector('#' + id).classList.remove("btn-danger");
      document.querySelector('#' + id).classList.add("btn-success");
    } else {
      document.querySelector('#' + id).classList.remove("btn-success");
      document.querySelector('#' + id).classList.add("btn-danger");
    }

  return false;
}
