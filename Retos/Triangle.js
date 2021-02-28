class Triangle {
  constructor(baseline, height) {
    this.baseline = baseline;
    this.height = height;
  }

  Perimeter(){
    return (this.baseline + this.height);
  }

  Surface(){
    return (this.baseline * this.height);
  }
}
