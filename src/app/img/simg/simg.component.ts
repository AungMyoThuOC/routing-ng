import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simg',
  templateUrl: './simg.component.html',
  styleUrls: ['./simg.component.css']
})
export class SimgComponent {
  constructor(
    private router: Router
  ) {}

  goToInstructor(): void {
    this.router.navigateByUrl('instructor');
  }
}
