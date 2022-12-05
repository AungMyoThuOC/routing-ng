import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flut',
  templateUrl: './flut.component.html',
  styleUrls: ['./flut.component.css']
})
export class FlutComponent {
  constructor(
    private rou: Router
  ) {}

  ngOnInit(): void {

  }

  goToCourses(): void {
    this.rou.navigate(['courses']);
  }
}
