var r1 = [];
var r2 = [];
var solucionesc2 = [];
var r3 = [];



window.onload = function () {

  /*var xhttp = new XMLHttpRequest();
    
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
    
  }*/


  //----- ESTO ES DE JSON CON SERVIDOR ------------------------------------------------
  // fichoro xml que está en el servidor rawgit
  var url = "https://rawgit.com/PedroDpsweb/FormularioPedroSanchez/master/json/json.json";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // función personalizada que gestiona la respuesta a la petición de fichero
      gestionarJson(this.responseText);
    }
  };
  xhttp.open("GET", url, true); //url del fichero
  xhttp.send();

  // función personalizada que gestiona la respuesta a la petición de fichero
  function gestionarJson(dadesJson) {
    var object = JSON.parse(dadesJson);

    //INPUT

    for (var i = 0; i < 10; i++) {
      document.getElementsByTagName("h2")[i].innerHTML = object.questions.question[i].title;
    }

    //SELECT
    var nsel = document.getElementsByTagName("select").length;
    var nopt = object.questions.question[2].option.length;

    for (var j = 0; j < nsel; j++) {
      var inicio = 2 + j;
      var sel = document.getElementsByTagName("select")[j];
      for (var i = 0; i < nopt; i++) {
        var opt = document.createElement("option");

        opt.value = i + 1;
        opt.text = object.questions.question[inicio].option[i];
        sel.appendChild(opt);
      }

    }
    //CHECKBOX1
    var nlabel = document.getElementsByClassName("check").length
    var noptl = object.questions.question[6].option.length;


    for (var i = 0; i < nlabel; i++) {

      var sel = document.getElementsByClassName("check")[i];

      sel.innerHTML = object.questions.question[6].option[i];
    }

    //CHECKBOX2

    var nlabel2 = document.getElementsByClassName("check2").length
    var noptl2 = object.questions.question[7].option.length;


    for (var i = 0; i < nlabel2; i++) {

      var sel = document.getElementsByClassName("check2")[i];

      sel.innerHTML = object.questions.question[7].option[i];
    }

    //radiobutton

    var nradio = document.getElementsByClassName("radio").length
    var noptr = object.questions.question[8].option.length;


    for (var i = 0; i < nradio; i++) {

      var sel = document.getElementsByClassName("radio")[i];

      sel.innerHTML = object.questions.question[8].option[i];
    }


    //radiobutton2

    var nradio2 = document.getElementsByClassName("radio2").length
    var noptr = object.questions.question[9].option.length;


    for (var i = 0; i < nradio2; i++) {

      var sel = document.getElementsByClassName("radio2")[i];

      sel.innerHTML = object.questions.question[9].option[i];
    }


    //LLENAR ARRAY
    for (var i = 0; i < 6; i++) {
      r1.push(object.questions.question[i].answer);
    }

    r2.push(object.questions.question[6].answer);
    solucionesc2.push(object.questions.question[7].answer);

    for (j = 8; j < 10; j++) {
      r3.push(object.questions.question[j].answer);
    }





    function respuesta(dadesJson) {


      for (var i = 0; i < 4; i++) {
        var comparar1 = document.getElementsByClassName("respuesta")[i].value;
        var comparar2 = object.questions.question[i].answer;
        if (comparar1 == comparar2) {
          document.getElementsByClassName("resultado")[i].style.backgroundColor = "green";
        } else {
          document.getElementsByClassName("resultado")[i].style.backgroundColor = "red";
        }

      }

      for (var i = 8; i < 10; i++) {
        var comparar1 = document.getElementsByClassName("respuesta")[i].innerHTML;
        var comparar2 = object.questions.question[i].answer;
        if (comparar1 == comparar2) {
          document.getElementsByClassName("resultado")[i].style.backgroundColor = "green";
        } else {
          document.getElementsByClassName("resultado")[i].style.backgroundColor = "red";
        }

      }


      //if()

    }
    //respuesta();


    function input() {
      var respuesta = document.getElementsByClassName("respuesta")[0].value;
      var comparar2 = object.questions.question[0].answer;
      if (respuesta == comparar2) {
        document.getElementsByClassName("resultado")[0].style.backgroundColor = "green";
      } else {
        document.getElementsByClassName("resultado")[0].style.backgroundColor = "red";
      }

    }


  }

}

function resolver1() {
  var contador = 0;
  var aciertocheck = 0;
  var fallocheck = 0;
  var aciertocheck1 = 0;
  var fallocheck1 = 0;

  for (var i = 0; i < 4; i++) {
    var hola = document.getElementsByClassName("respuesta")[i].value;
    var adios = r1[i];

    if (hola == adios) {
      document.getElementsByClassName("resultado")[i].style.backgroundColor = "green";
      contador++;

    } else {
      document.getElementsByClassName("resultado")[i].style.backgroundColor = "red";

    }



  }
  //radiobutton1
  for (var i = 0; i < 4; i++) {
    var xec=document.getElementsByClassName("radior")[i].checked;
    
    

    if(xec==true){
      var hola = document.getElementsByClassName("radior")[i].value;
      var adios = r3[0];
      if (hola == adios) {
        document.getElementsByClassName("resultado")[8].style.backgroundColor = "green";
        contador++;
  
      } else {
        document.getElementsByClassName("resultado")[8].style.backgroundColor = "red";
  
      }
  
    }

    


  }

  //radiobutton2
  for (var i = 0; i < 5; i++) {
    var xec=document.getElementsByClassName("radior2")[i].checked;
    
    

    if(xec==true){
      var hola = document.getElementsByClassName("radior2")[i].value;
      var adios = r3[1];
      if (hola == adios) {
        document.getElementsByClassName("resultado")[9].style.backgroundColor = "green";
        contador++;
  
      } else {
        document.getElementsByClassName("resultado")[9].style.backgroundColor = "red";
  
      }
  
    }

    


  }

  /*for (var i = 4; i < 6; i++) {
    for (var j = 0; j < 5; j++) {
      var m = 4;
      var hola = document.getElementsByClassName("respuesta")[i].value[j];
      var adios = r1[m];
      var aux = 0;
      m++;

      if (hola == adios) {
        var acierto = true;
        aux++


      }

      if (aux = 3) {
        document.getElementsByClassName("resultado")[i].style.backgroundColor = "green";
        contador++;

      } else {
        document.getElementsByClassName("resultado")[i].style.backgroundColor = "red";

      }

      
      

    }


    document.getElementById("contador").innerHTML = "Número de aciertos: " + contador;



  }*/

  //chechbox1
  for (var i = 0; i < 5; i++) {
    var resp = document.getElementsByClassName("check1")[i].checked;
    var resp0 = document.getElementsByClassName("check1")[i].value;
    if (resp == true) {
      var ns = i.toString();
      var n = r2[0].indexOf(ns);
      if (n >= 0) {
        aciertocheck++;
      } else {
        fallocheck++;
      }

    }

    if (aciertocheck == 3 && fallocheck == 0) {
      document.getElementsByClassName("resultado")[6].style.backgroundColor = "green";
      contador++;
    } else {
      document.getElementsByClassName("resultado")[6].style.backgroundColor = "red";
    }


  }
  //checkbox2
  for (var i = 0; i < 5; i++) {
    var resp = document.getElementsByClassName("check3")[i].checked;
    var resp0 = document.getElementsByClassName("check3")[i].value;
    if (resp == true) {
      var ns = i.toString();
      var n = solucionesc2[0].indexOf(ns);
      if (n >= 0) {
        aciertocheck1++;
      } else {
        fallocheck1++;
      }
      if (aciertocheck1 == 2 && fallocheck1 == 0) {
        document.getElementsByClassName("resultado")[7].style.backgroundColor = "green";
        contador++;
      } else {
        document.getElementsByClassName("resultado")[7].style.backgroundColor = "red";
      }
  
    }

    

  }


  document.getElementById("contador").innerHTML = contador;
}