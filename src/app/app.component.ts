import { Component } from '@angular/core';
import { MathfieldElement } from 'mathlive';
export const mfe = new MathfieldElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exam Alpha';
}
