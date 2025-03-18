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
  isDarkMode = false;

  constructor(private ngZone: NgZone) {
    // Comprobar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleTheme(): void {
    this.ngZone.run(() => {
      this.isDarkMode = !this.isDarkMode;
      
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }
}