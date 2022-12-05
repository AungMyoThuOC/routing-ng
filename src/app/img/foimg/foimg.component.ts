import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foimg',
  templateUrl: './foimg.component.html',
  styleUrls: ['./foimg.component.css']
})
export class FoimgComponent {
  constructor(
    private router: Router
  ) {}

  goToInstructor(): void {
    this.router.navigateByUrl('instructor');
  }
}
