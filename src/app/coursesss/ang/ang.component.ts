import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ang',
  templateUrl: './ang.component.html',
  styleUrls: ['./ang.component.css']
})
export class AngComponent {
  constructor(
    private rou: Router
  ) {}

  ngOnInit(): void {

  }

  goToCourses(): void {
    this.rou.navigate(['courses']);
  }
}
