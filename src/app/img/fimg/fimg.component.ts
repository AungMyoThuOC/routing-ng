import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fimg',
  templateUrl: './fimg.component.html',
  styleUrls: ['./fimg.component.css']
})
export class FimgComponent {
  constructor(
    private router: Router
  ) {}

  goToInstructor(): void {
    this.router.navigateByUrl('instructor');
  }
}
