window.onload{

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  gestionarXml(this);
 }
};
xhttp.open("GET", "https://rawgit.com/PedroDpsweb/FormularioPedroSanchez/master/XML/xml.xml", true); //localhost no ha de funcionar
xhttp.send();

function gestionarXml(dadesXml){
var xmlDoc = dadesXml.responseXML;
}

}