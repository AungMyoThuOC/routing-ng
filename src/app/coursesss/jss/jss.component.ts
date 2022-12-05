import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jss',
  templateUrl: './jss.component.html',
  styleUrls: ['./jss.component.css']
})
export class JssComponent {
  constructor(
    private rou: Router
  ) {}

  ngOnInit(): void {

  }

  goToCourses(): void {
    this.rou.navigate(['courses']);
  }
}
