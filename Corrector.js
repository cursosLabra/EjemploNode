function Corrector() {
  function calculaNota(enunciado,respuestas) {
	  var nota = 0;
	  respuestas.forEach(function(respuesta) {
		  var pregunta = respuesta["pregunta"];
		  var valor = respuesta["respuesta"];
		  var correcto = buscaPregunta(enunciado,pregunta);
		  if (valor == correcto) 
			  nota += 1;
		  else 
			  nota -= 0.25;
	  });
	  return nota;
  }
  
  function buscaPregunta(enunciado,pregunta) {
		var busca = enunciado.filter(function(e) {
			  return e["pregunta"] == pregunta;
		});
		if (busca.length > 0) {
			return busca[0]["correcta"];
		} else {
			throw "No encontrado";
		}
	}
	
  function corrige(enunciado,examen) {
	  var resultado = [];
	  examen.forEach(function(prueba) {
		var id = prueba["alumno"];
		var respuestas = prueba["respuestas"];
		var nota = calculaNota(enunciado,respuestas);
		var valor = { "alumno" : id, "nota": nota }; 
		resultado.push(valor);
	  });
	  return resultado;
  }	
  
  return {
	   corrige: corrige
  };

}

module.exports = Corrector;



