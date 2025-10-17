import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-violence-weapons',
  imports: [CommonModule],
  templateUrl: './violence-weapons.component.html',
  styleUrl: './violence-weapons.component.css'
})
export class ViolenceWeaponsComponent {
  violenceImages: string[] = [
    'assets/v1.webp',
    'assets/v2.webp',
    'assets/v3.webp',
    'assets/v4.webp',
    'assets/v5.webp',
    'assets/v6.webp',
    'assets/v7.webp',
    'assets/v8.webp',
    'assets/v9.webp',
    'assets/v10.webp'
    
  ];
}
