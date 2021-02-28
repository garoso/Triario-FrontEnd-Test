function Maestro(materia, calificaciones) {
  this.materia = materia;
  this.calificaciones = calificaciones
  Maestro.prototype.promedioGrupo = function(){
    return (this.calificaciones.reduce((sum, current) => sum += current)) / calificaciones.length;
  }
}

function MaestroDeFisica(materia, calificaciones, antiguedad) {
  Maestro.call(this, materia, calificaciones);
  this.antiguedad = antiguedad;
}
MaestroDeFisica.prototype = new Maestro();

function MaestroDeMusica(materia, calificaciones, edad){
  Maestro.call(this, materia, calificaciones);
  this.edad = edad;
}
MaestroDeMusica.prototype = new Maestro();
