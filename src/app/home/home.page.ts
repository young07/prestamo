import { Component } from '@angular/core';


interface Componente {
 icon: string;
 name: string;
 redirectTo: string;

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  componentes: Componente[] = [
    {
      icon: 'list-outline',
      name: 'Cliente',
      redirectTo:'/list'
    },
    {
      icon: 'create-outline',
      name: 'Crear',
      redirectTo:'/create'
    }
  ];

  constructor() {}

}
