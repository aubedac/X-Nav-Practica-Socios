var timeline = "ajax/tl.json";
var myline = "ajax/myline.json";
var update = "ajax/update.json";
var IdSection1 = '.tab .tab-content #Section1';
var IdSection2 = '.tab .tab-content #Section2';

$(document).ready(function() {
  $('.tab .tab-content #Section1 #update').html('mensaje(s) nuevo(s), pincha y serán añadido al final.');
  $('.tab .tab-content #Section1 #update').bind('click', function() {
    $('.tab .tab-content #Section1 #update').css("visibility", "hidden");
    getJSON(update, IdSection1);
    $('.tab .tab-content #Section1 #update').unbind('click');
  });
  getJSON(timeline, IdSection1);
  $('.tab .nav-tabs li').bind('click', function() {
    getJSON(myline, IdSection2);
    $('.tab .nav-tabs li').unbind('click');
  });
});

function getJSON(url, place) {
  $.getJSON(url, {
  }).done(function(data){
    for(var i = 0; i < data.length; i++) {
      createPost(data[i], i, place);
    }
  });
}

function createPost(data, nId, section) {
  var fields = ["Autor: " + data.autor, "Titulo: " + data.titulo, "Contenido: " + data.contenido, "Fecha: " + data.fecha];
  var div = document.createElement('div');
  div.id = "div" + nId;
  $(section).append(div);
  createList(fields, div);
  var img = data.avatar;
  var elem = document.createElement('img');
  elem.width = 75;
  elem.height = 75;
  elem.src = img;
  div.appendChild(elem);
  var p = document.createElement('p');
  div.append(p);
}

function createList(fields, div) {
  console.log(div);
  var ul = document.createElement('ul');
  for(var k = 0; k < fields.length; k++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(fields[k]));
    ul.appendChild(item);
  }
  div.appendChild(ul);
}
