import { Component } from '@angular/core';
import { services } from './services.model';
import { service } from './services-list';

@Component({
  selector: 'app-servicse',
  templateUrl: './servicse.component.html',
  styleUrl: './servicse.component.scss',
})
export class ServicseComponent {
  service: services[] = service;
}
