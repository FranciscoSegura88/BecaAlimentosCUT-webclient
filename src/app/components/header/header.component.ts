import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwitchModoComponent } from '../switch-modo/switch-modo.component';

@Component({
  selector: 'app-header',
  imports: [SwitchModoComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
}
