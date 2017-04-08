window.onload = function(){
	disabled();
}
function disabled(){
	for(var i = 0; i < 100; i++){
		document.getElementsByClassName("field")[i].disabled = true;
	}
}
function start(){
	if(document.getElementById("start").innerHTML == "Rozpocznij"){
		for(var i = 0; i < 100; i++){
			document.getElementsByClassName("field")[i].disabled = false;
			document.getElementsByClassName("field")[i].innerHTML = '';
			document.getElementsByClassName("field")[i].style.color = "#202020";
			document.getElementsByClassName("field")[i].style.backgroundColor = "#202020";
		}
		var count;
		if(bt0.className == "active"){
			count = 10;
			random(count);
		}
		else if(bt1.className == "active"){
			count = 20;
			random(count);
		}
		else{
			count = 30;
			random(count);
		}
		document.getElementById("start").innerHTML = "Poddaj się";
	}
	else{
		for(var i = 0; i < 100; i++){
			document.getElementsByClassName("field")[i].style.backgroundColor = "#DDDDDD";
			if(blackboard[i] == 0){
				document.getElementsByClassName("field")[i].innerHTML = '';
			}
			else{
				if(blackboard[i] == 9){
					document.getElementsByClassName("field")[i].style.color = "red";
				}
				document.getElementsByClassName("field")[i].innerHTML = blackboard[i];
			}
		}
		document.getElementById("start").innerHTML = "Rozpocznij";
	}
}
var blackboard = new Array(100);
function random(count){
	for(var i = 0; i < 100; i ++){
		blackboard[i] = 0;
	}
	for(var i = 0; i < count; i++){
		var random = Math.floor((Math.random() * 100) + 0);
		if(blackboard[random] == 9){
			i--;
		}
		else{
			blackboard[random] = 9;
			if(random == 0){
				if(blackboard[random + 1] != 9){
					blackboard[random + 1] += 1;
				}
				if(blackboard[random + 10] != 9){
					blackboard[random + 10] += 1;
				}
				if(blackboard[random + 11] != 9){
					blackboard[random + 11] += 1;
				}
			}
			else if(random == 9){
				if(blackboard[random - 1] != 9){
					blackboard[random - 1] += 1;
				}
				if(blackboard[random + 9] != 9){
					blackboard[random + 9] += 1;
				}
				if(blackboard[random + 10] != 9){
					blackboard[random + 10] += 1;
				}
			}
			else if(random == 90){
				if(blackboard[random + 1] != 9){
					blackboard[random + 1] += 1;
				}
				if(blackboard[random - 9] != 9){
					blackboard[random - 9] += 1;
				}
				if(blackboard[random - 10] != 9){
					blackboard[random - 10] += 1;
				}
			}
			else if(random == 99){
				if(blackboard[random - 1] != 9){
					blackboard[random - 1] += 1;
				}
				if(blackboard[random - 10] != 9){
					blackboard[random - 10] += 1;
				}
				if(blackboard[random - 11] != 9){
					blackboard[random - 11] += 1;
				}
			}
			else if(random % 10 == 0 && random != 0 && random != 90){
				if(blackboard[random - 10] != 9){
					blackboard[random - 10] += 1;
				}
				if(blackboard[random - 9] != 9){
					blackboard[random - 9] += 1;
				}
				if(blackboard[random + 1] != 9){
					blackboard[random + 1] += 1;
				}
				if(blackboard[random + 10] != 9){
					blackboard[random + 10] += 1;
				}
				if(blackboard[random + 11] != 9){
					blackboard[random + 11] += 1;
				}
			}
			else if(random % 10 == 9 && random != 9 && random != 99){
				if(blackboard[random - 10] != 9){
					blackboard[random - 10] += 1;
				}
				if(blackboard[random - 11] != 9){
					blackboard[random - 11] += 1;
				}
				if(blackboard[random - 1] != 9){
					blackboard[random - 1] += 1;
				}
				if(blackboard[random + 10] != 9){
					blackboard[random + 10] += 1;
				}
				if(blackboard[random + 9] != 9){
					blackboard[random + 9] += 1;
				}
			}
			else if(random > 0 && random < 9){
				if(blackboard[random - 1] != 9){
					blackboard[random - 1] += 1;
				}
				if(blackboard[random + 9] != 9){
					blackboard[random + 9] += 1;
				}
				if(blackboard[random + 10] != 9){
					blackboard[random + 10] += 1;
				}
				if(blackboard[random + 11] != 9){
					blackboard[random + 11] += 1;
				}
				if(blackboard[random + 1] != 9){
					blackboard[random + 1] += 1;
				}
			}
			else if(random > 90 && random < 99){
				if(blackboard[random - 1] != 9){
					blackboard[random - 1] += 1;
				}
				if(blackboard[random - 11] != 9){
					blackboard[random - 11] += 1;
				}
				if(blackboard[random - 10] != 9){
					blackboard[random - 10] += 1;
				}
				if(blackboard[random - 9] != 9){
					blackboard[random - 9] += 1;
				}
				if(blackboard[random + 1] != 9){
					blackboard[random + 1] += 1;
				}
			}
			else{
				if(blackboard[random - 1] != 9){
					blackboard[random - 1] += 1;
				}
				if(blackboard[random - 11] != 9){
					blackboard[random - 11] += 1;
				}
				if(blackboard[random - 10] != 9){
					blackboard[random - 10] += 1;
				}
				if(blackboard[random - 9] != 9){
					blackboard[random - 9] += 1;
				}
				if(blackboard[random + 1] != 9){
					blackboard[random + 1] += 1;
				}
				if(blackboard[random + 11] != 9){
					blackboard[random + 11] += 1;
				}
				if(blackboard[random + 10] != 9){
					blackboard[random + 10] += 1;
				}
				if(blackboard[random + 9] != 9){
					blackboard[random + 9] += 1;
				}
			}
		}
	}
}
function change(number){
	if(number == 0){
		bt0.className = "active";
		bt1.className = "noActive";
		bt2.className = "noActive";
	}
	else if(number == 1){
		bt1.className = "active";
		bt0.className = "noActive";
		bt2.className = "noActive";
	}
	else if(number == 2){
		bt2.className = "active";
		bt0.className = "noActive";
		bt1.className = "noActive";
	}
}
function discover(number){
	document.getElementsByClassName("field")[number].style.backgroundColor = "#DDDDDD";
	if(blackboard[number] == 0){
		document.getElementsByClassName("field")[number].innerHTML = '';
	}
	else{
		if(blackboard[number] == 9){
			document.getElementsByClassName("field")[number].style.color = "red";
		}
		document.getElementsByClassName("field")[number].innerHTML = blackboard[number];
	}
}