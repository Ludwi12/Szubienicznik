//41:22
var pass = "abc";
pass = pass.toUpperCase(); 								//funkcja zmieniajaca na wielkie litery

var long = pass.length;										//zwracanie dlugosci string
var pass_line = "";

var loss = 0;

var yes = new Audio("kurs_js3/yes.wav");
var no  = new Audio("kurs_js3/no.wav");

	for (var i=0; i<long; i++) {
		if (pass.charAt(i) == " ") {						//charAt, poniewaz js nie obslugije []
			pass_line = pass_line + " ";
		} else {
			pass_line = pass_line + "-";
		}
	}



function writePass() {
	
	document.getElementById("board").innerHTML = pass_line;
}

window.onload = startGame;								//zdazenie po otwarciu okna, tylko alias 

	var table_pl = new Array(35);							//tablica array
	table_pl[0]  = "A";
	table_pl[1]  = "Ą";
	table_pl[2]  = "B";
	table_pl[3]  = "C";
	table_pl[4]  = "Ć";
	table_pl[5]  = "D";
	table_pl[6]  = "E";
	table_pl[7]  = "Ę";
	table_pl[8]  = "F";
	table_pl[9]  = "G";
	table_pl[10] = "H";
	table_pl[11] = "I";
	table_pl[12] = "J";
	table_pl[13] = "K";
	table_pl[14] = "L";
	table_pl[15] = "Ł";
	table_pl[16] = "M";
	table_pl[17] = "N";
	table_pl[18] = "Ń";
	table_pl[19] = "O";
	table_pl[20] = "Ó";
	table_pl[21] = "P";
	table_pl[22] = "Q";
	table_pl[23] = "R";
	table_pl[24] = "S";
	table_pl[25] = "Ś";
	table_pl[26] = "T";
	table_pl[27] = "U";
	table_pl[28] = "V";
	table_pl[29] = "W";
	table_pl[30] = "X";
	table_pl[31] = "Y";
	table_pl[32] = "Z";
	table_pl[33] = "Ż";
	table_pl[34] = "Ź";



function startGame() {
	
	var text_abc = "";
	
	for (var i = 0; i < 35; i++) {
		
		var element = "lit" + i;
		
		text_abc = text_abc + '<div class = "latter" onclick="checkClick('+i+')" id="'+element+'">' + table_pl[i] +'</div>';
			if ((i+1) % 7 == 0) {											//jeżeli (i od 1) modulo (reszta dzielenia) z 7 jest zero, to daj styl czyszczacy linie
				text_abc = text_abc + '<div style="clear:both;"></div>';
			}
	}
	
	document.getElementById("abc").innerHTML= text_abc;
	
	writePass();
	
}

String.prototype.setMark = function(place, mark){		//funkcja ustawiajaca znak, wykorzystanie obiektu
	if (place > this.length - 1){						//this dotyczy dlugosci pobieranego argumentu funkcji
		return this.toString();
	} else {
	return this.substr(0, place) + mark + this.substr(place + 1); //substar zamienia znaki z okreslonym miejcu w lancuchu
	}
	
}

function checkClick(nr){
	var hit = false;
	
	for(var i = 0; i<long; i++){
		if (pass.charAt(i) == table_pl[nr]){
			pass_line = pass_line.setMark(i, table_pl[nr]);
			hit = true;
		}
	}
		
		if(hit == true){ 
			yes.play();
			var element = "lit" + nr;
			
			document.getElementById(element).style.background = "#003300";
			document.getElementById(element).style.color = "#00C300";
			document.getElementById(element).style.border = "3px solid #00C000";
			document.getElementById(element).style.cursor = "#default";
			
			
			writePass();
		} else {
			no.play();
			var element = "lit" + nr;
			
			document.getElementById(element).style.background = "#330000";
			document.getElementById(element).style.color = "#C0000";
			document.getElementById(element).style.border = "3px solid #C00000";
			document.getElementById(element).style.cursor = "#default";
			document.getElementById(element).setAttribute("onclick", ";");			//po wykonaniu zamien atrybut onclick na ;
			
			//loss
			loss++;
			var image = "kurs_js3/img/s"+ loss + ".jpg";
			document.getElementById("gallows").innerHTML= '<img src="'+image+'" alt="" />';
		} 
		
		//wygrana
		if (pass == pass_line){
			document.getElementById("abc").innerHTML = "Wygrana! <br/> "+pass+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ!</span>';
			//location.reload resetuje skrypt
		}
		
		if (loss >= 9){
			document.getElementById("abc").innerHTML = "Przegrana :c <br/> "+pass+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ!</span>';
		}
		
	}
	
	

