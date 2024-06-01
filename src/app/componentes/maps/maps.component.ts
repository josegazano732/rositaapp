import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  position={
    lat: -27.919160,
    lng:-55.747422
  };

  label= {
    color: 'DarkOrchid',
    text: 'Rosita pequeño Detalles'
  }

}

