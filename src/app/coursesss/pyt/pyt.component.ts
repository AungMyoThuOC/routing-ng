import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pyt',
  templateUrl: './pyt.component.html',
  styleUrls: ['./pyt.component.css']
})
export class PytComponent {
  constructor(
    private rou: Router
  ) {}

  ngOnInit(): void {

  }

  goToCourses(): void {
    this.rou.navigate(['courses']);
  }
}
