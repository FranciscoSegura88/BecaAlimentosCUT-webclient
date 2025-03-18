import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch-modo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-modo.component.html',
  styleUrl: './switch-modo.component.css'
})
export class SwitchModoComponent {
  isDarkMode = false;//variable para rastrear el estado actual

  constructor(private ngZone: NgZone) {
    // Comprobar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }
  //func para alternar entre temas
  toggleTheme(): void {
    //ngzone es para asegurar que los cambios en el dom se detecten correctamente
    this.ngZone.run(() => {
      //invertir estado actual
      this.isDarkMode = !this.isDarkMode;
      
      if (this.isDarkMode)
        //activa modo oscuro
        {
        document.body.classList.add('dark-mode');
        //guardar la preferencia en el localstorage
        localStorage.setItem('theme', 'dark');
      } else {
        //desactivar modo oscuro
        document.body.classList.remove('dark-mode');
        //igual guarda
        localStorage.setItem('theme', 'light');
      }
    });
  }
}