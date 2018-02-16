var r1 = [];



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
    for (var i = 0; i < 10; i++) {
      r1.push(object.questions.question[i].answer);
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




    // AQUI ACABA JSON CON SERVIDOR ----------------------------------------

    //AQUI EMPIEZA JSON SIN SERVER-----------------------------------------
    /*var textJSON = 
    {
        "questions": {
          "question": [
            {
              "-id": "profe001",
              "type": "text",
              "title": "¿ A qué asignatura nos referimmos si hablamos de SQL ?",
              "answer": "Base de datos"
            },
            {
              "-id": "profe002",
              "type": "text",
              "title": "¿ Qué dos partes principales tiene un HTML ?",
              "answer": "Head y Body"
            },
            {
              "-id": "profe003",
              "type": "select",
              "title": "¿ Cuantas preguntas ponen en los exámenes de bases de datos ?",
              "option": [
                "1",
                "5",
                "10",
                "15",
                "20"
              ],
              "answer": "2"
            },
            {
              "-id": "profe004",
              "type": "select",
              "title": "¿ Como se llama éste instituto ?",
              "option": [
                "San josep Obrer",
                "Francesc de Borjamoll",
                "San Vicente de Paul",
                "La Salle",
                "Ninguna de las anteriores"
              ],
              "answer": "1"
            },
            {
              "-id": "profe005",
              "type": "multiple",
              "title": "¿ Que lenguajes de progrmaación hemos dado este curso ?",
              "option": [
                "Python",
                "Java",
                "Javascript",
                "HTML",
                "CSS"
              ],
              "answer": [
                "0",
                "1",
                "2"
              ]
            },
            {
              "-id": "profe006",
              "type": "multiple",
              "title": " Para Lunar lander necesitamos usar :",
              "option": [
                "HTML",
                "CSS",
                "JS",
                "Jquery",
                "Python",
                "Boostrap"
              ],
              "answer": [
                "0",
                "1",
                "3"
              ]
            },
            {
              "-id": "profe007",
              "type": "checkbox",
              "title": " Formas de aprender a programar:",
              "option": [
                "clases",
                "píldoras informáticas",
                "jugarndo al Lol",
                "Quedando con la novia",
                "En el bar"
              ],
              "answer": [
                "0",
                "1",
                "4"
              ]
            },
            {
              "-id": "profe008",
              "type": "checkbox",
              "title": "¿ Que crees que te pasará al acabar las clases ?",
              "option": [
                "Valorarás tu vida social",
                "Te darán trabajo",
                "Olvidarás todo lo que sabes",
                "Cambiarás de gremio",
                "Seguirás estudiando"
              ],
              "answer": [
                "0",
                "2"
              ]
            },
            {
              "-id": "profe009",
              "type": "radio",
              "title": "¿ Que pasará si repites curso ?",
              "option": [
                "Te deprimirás",
                "Te pondrás muy contento",
                "Dejarás el curso",
                "Aprovarás mas facil a la próxima"
              ],
              "answer": "3"
            },
            {
              "-id": "profe010",
              "type": "radio",
              "title": "¿ que te ha parecido este formulário ?",
              "option": [
                "Lo peor",
                "No está mal",
                "Está bien",
                "Es lo mejor",
                "Me da bastante igual"
              ],
              "answer": "4"
            }
          ]
        }
      }
      
    var object = JSON.parse(textJSON);
      
    document.getElementById("p1").innerHTML = object.pregunta[0].titol;
    document.getElementById("t1").innerHTML = object.pregunta[0].tipus;
    document.getElementById("r1").innerHTML = object.pregunta[0].resposta;*/

    // AQUI ACABA JSON SIN SERVER-------------------------------------------------------
    //
    //NUMBER
    //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
    // var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
    // ponerDatosInputHtml(tituloInput);
    //numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

    //----------------------------------------------------
    // poner los datos recibios en el HTML
    //function ponerDatosInputHtml(t){
    //   document.getElementById("tituloInput").innerHTML = t;
    //  }


  }

}

function prueba() {
  var contador = 0;
  
  for (var i = 0; 1 < 4; i++) {
    var hola = document.getElementsByClassName("respuesta")[i].value;
    var adios = r1[i];
    document.getElementById("contador").innerHTML = "Número de aciertos: "+contador;
    if (hola == adios) {
      document.getElementsByClassName("resultado")[i].style.backgroundColor = "green";
      contador++;

    } else {
      document.getElementsByClassName("resultado")[i].style.backgroundColor = "red";

    }



  }

  




}