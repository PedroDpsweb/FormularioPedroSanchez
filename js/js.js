window.onload = function(){

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


//NUMBER
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
 ponerDatosInputHtml(tituloInput);
 numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

//----------------------------------------------------
// poner los datos recibios en el HTML
function ponerDatosInputHtml(t){
    document.getElementById("tituloInput").innerHTML = t;
   }
