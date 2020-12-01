function v(){

	alert("Prosesando datos...");
	var r1 = document.getElementById("r1").value;
	var r2 = document.getElementById("r2").value;
	var r3 = document.getElementById("r3").value;
	var r4 = document.getElementById("r4").value;
	var r5 = document.getElementById("r5").value;
	var r6 = document.getElementById("r6").value;
	var r7 = document.getElementById("r7").value;
	var r8 = document.getElementById("r8").value;

	var azul = 0;
	var verde = 0;
	var rojo = 0;
	var amarillo = 0;


	if(r1 == "a"){
		verde++;
		document.getElementById("r1").style.background = "green";
	}else if(r1 == "b"){
		rojo++;
		document.getElementById("r1").style.background = "red";
	}else if(r1 == "c"){
		amarillo++;
		document.getElementById("r1").style.background = "yellow";
	}else if(r1 == "d"){
		azul++;
		document.getElementById("r1").style.background = "blue";
	}


	if(r2 == "a"){
		azul++;
		document.getElementById("r2").style.background = "blue";
	}else if(r2 == "b"){
		verde++;
		document.getElementById("r2").style.background = "green";
	}else if(r2 == "c"){
		amarillo++;
		document.getElementById("r2").style.background = "yellow";
	}else if(r2 == "d"){
		rojo++;
		document.getElementById("r2").style.background = "red";
	}


	if(r3 == "a"){
		rojo++;
		document.getElementById("r3").style.background = "red";
	}else if(r3 == "b"){
		verde++;
		document.getElementById("r34").style.background = "green";
	}else if(r3 == "c"){
		azul++;
		document.getElementById("r3").style.background = "blue";
	}else if(r3 == "d"){
		amarillo++;
		document.getElementById("r3").style.background = "yellow";
	}


	if(r4 == "a"){
		verde++;
		document.getElementById("r4").style.background = "green";
	}else if(r4 == "b"){
		azul++;
		document.getElementById("r4").style.background = "blue";
	}else if(r4 == "c"){
		rojo++;
		document.getElementById("r4").style.background = "red";
	}else if(r4 == "d"){
		amarillo++;
		document.getElementById("r4").style.background = "yellow";
	}


	if(r5 == "a"){
		verde++;
		document.getElementById("r5").style.background = "green";
	}else if(r5 == "b"){
		rojo++;
		document.getElementById("r5").style.background = "red";
	}else if(r5 == "c"){
		amarillo++;
		document.getElementById("r5").style.background = "yellow";
	}else if(r5 == "d"){
		azul++;
		document.getElementById("r5").style.background = "blue";
	}


	if(r6 == "a"){
		rojo++;
		document.getElementById("r6").style.background = "red";
	}else if(r6 == "b"){
		azul++;
		document.getElementById("r6").style.background = "blue";
	}else if(r6 == "c"){
		verde++;
		document.getElementById("r6").style.background = "green";
	}else if(r6 == "d"){
		amarillo++;
		document.getElementById("r6").style.background = "yellow";
	}


	if(r7== "a"){
		azul++;
		document.getElementById("r7").style.background = "blue";
	}else if(r7 == "b"){
		verde++;
		document.getElementById("r7").style.background = "green";
	}else if(r7 == "c"){
		rojo++;
		document.getElementById("r7").style.background = "red";
	}else if(r7 == "d"){
		amarillo++;
		document.getElementById("r7").style.background = "yellow";
	}


	if(r8 == "a"){
		azul++;
		document.getElementById("r8").style.background = "blue";
	}else if(r8 == "b"){
		verde++;
		document.getElementById("r8").style.background = "green";
	}else if(r8 == "c"){
		amarillo++;
		document.getElementById("r8").style.background = "yellow";
	}else if(r8 == "d"){
		rojo++;
		document.getElementById("r8").style.background = "red";
	}


	if(azul >= verde && azul >= rojo && azul >= amarillo){
		alert("Tu inteligencia emocional es: Mala, tiene gran tendencia al pesimismo, Es conveniente que analice un poco sus actitudes. ");

	}else if(verde >= azul && verde >= rojo && verde >= amarillo){
		alert("Tu inteligencia emocional es: Regular, poca actitud positiva, Recuerde que todo puede verse bajo un ángulo más favorable, y eso, como aprenderá en esta obra, puede dar ventajas.");
		
	}else if (rojo >= azul && rojo >= verde && rojo >= amarillo ){
		alert("Tu inteligencia emocional es: Buena, actitud positiva, dotada de adecuada sensatez No deje de fortalecerla, siempre bajo el control de la lógica.");

	}else if (amarillo >= azul && amarillo >= verde  && amarillo >= rojo ){
		alert("Tu inteligencia emocional es: Excelente, actitud positiva en grado superlativo, pero carente del equilibrio que dan el sentido de prudencia y el ejercicio de la reflexión, fortalezca estas últimas cualidades, para compensar tanto optimismo.");
		
	}

}

function v2(){
	var r1 = document.getElementById("r1").value;
	var r2 = document.getElementById("r2").value;
	var r3 = document.getElementById("r3").value;
	var r4 = document.getElementById("r4").value;
	var r5 = document.getElementById("r5").value;


	var contador = 0;
	var malas = 0;

	if(r1 == "a"){
		contador++;
		document.getElementById("r1").style.background = "green";
	}else{
		malas++;
		document.getElementById("r1").style.background = "red";
	}
	if(r2 == "b"){
		contador++;
		document.getElementById("r2").style.background = "green";
	}else{
		malas++;
		document.getElementById("r2").style.background = "red";
	}
	if(r3 == "a"){
		contador++;
		document.getElementById("r3").style.background = "green";
	}else{
		malas++;
		document.getElementById("r3").style.background = "red";
	}
	if(r4 == "b"){
		contador++;
		document.getElementById("r4").style.background = "green";
	}else{
		malas++;
		document.getElementById("r4").style.background = "red";
	}
	if(r5 == "a"){
		contador++;
		document.getElementById("r5").style.background = "green";
	}else{
		malas++;
		document.getElementById("r5").style.background = "red";
	}

	alert("Buenas: " + contador + " Malas: " + malas);

}