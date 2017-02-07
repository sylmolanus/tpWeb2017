
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
  this.lsForms = new Array();
  
  this.getForme = fonction(){
	  
	  return this.lsForms;
  },
  
  this.addForm = fonction(lsForm){
	  
	  this.lsForm.push(lsForm) ;
	  
  }
};

function Forme(epaisseur, couleur) {
  this.epaisseur = epaisseur;
  this.couleur = couleur;
  
  this.getEpaisseur = fonction(){
	  
	  return this.epaisseur;
  },
  
  this.getCouleur = fonction(){
	  
	  return this.couleur;
	  
  }
};

function Rectangle(x, y, largeur, hauteur, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.x = x;
  this.y = y;
  this.largeur = largeur;
  this.hauteur = hauteur;
  
 	  
  }
  
};
Rectangle.prototype = new Forme();

function Ligne(x, y, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.x = x;
  this.y = y;
};
Ligne.prototype = new Forme();