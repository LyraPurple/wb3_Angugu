export class Pizza {
  // La différence entre une interface et une classe, c'est qu'une classe on peut l'instancier, une interface on ne peut pas l'instancier.
  id: number;
  name: string;
  price: number;
  image: string;

  constructor() {
    this.image = '01.jpg';
  }
}

