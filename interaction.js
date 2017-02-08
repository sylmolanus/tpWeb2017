
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	console.log("mainnn");
	this.PositionIniX = 0 ; // Position Initiale
	
	this.PositionIniY = 0 ; // Position Initiale

    this.PositionFinX = 0 ; // Position Finale
	
	this.PositionFinY =0 ; // Position Finale
	
	this.press = false;
	
	this.nb_action = 0;
	
	// Developper les 3 fonctions gérant les événements
	
	
	this.presser = function(evt){
		console.log("hjhgfdlkkjj");
		 this.nb_action++;
		 
		 this.presse = true;
		  	
		 	var mouseXY = getMousePosition(canvas, evt);
		 	
		 	this.PositionIniX = mouseXY.x;
		 	
		 	this.PositionIniY = mouseXY.y;
		 	
		 	console.log(this.nb_action + " : Pression = x : " + this.PositionIniX + " y : "+ this.PositionIniY);	 	
		
	}.bind(this);
	
	this.deplacement = function(evt){
		
		if(this.presse){
			 this.nb_action++;
			 
			 this.presse = true;
			  	
			 	var mouseXY = getMousePosition(canvas, evt);
			 	
			 	this.PositionFinX = mouseXY.x;
			 	
			 	this.PositionFinY = mouseXY.y;
			 	
			 	console.log(this.nb_action + " : Deplacement = x : " + this.PositionFinX + " y : "+ this.PositionFinY);	
			 	
		}
			
		}.bind(this);
		
		this.relachement = function(evt){
			
			
				 this.nb_action++;
				 
				 this.presse = true;
				  	
				 	var mouseXY = getMousePosition(canvas, evt);
				 	
				 	this.PositionFinX = mouseXY.x;
				 	
				 	this.PositionFinY = mouseXY.y;
				 	
				 	console.log(this.nb_action + " : Relachement = x : " + this.PositionFinX + " y : "+ this.PositionFinY);	
				
			
			 	
		
	}.bind(this);
	
	
	

	// Associer les fonctions précédentes aux évènements du canvas.
	
	canvas.addEventListener('mousedown', this.presser, false);
	canvas.addEventListener('mousemove',this.deplacement, false);
	canvas.addEventListener('mouseup',this.relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
	console.log("mainnn");
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



