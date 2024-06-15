import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagenListasComponent } from './imagen-listas/imagen-listas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ImagenListasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab09_Urcia';
}
