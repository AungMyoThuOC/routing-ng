import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timg',
  templateUrl: './timg.component.html',
  styleUrls: ['./timg.component.css']
})
export class TimgComponent {
  constructor(
    private router: Router
  ) {}

  goToInstructor(): void {
    this.router.navigateByUrl('instructor');
  }
}
