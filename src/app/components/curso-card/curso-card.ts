import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-curso-card',
  imports: [MatCardModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './curso-card.html',
  styleUrl: './curso-card.scss',
})
export class CursoCard {
  curso = input.required<any>();
}
