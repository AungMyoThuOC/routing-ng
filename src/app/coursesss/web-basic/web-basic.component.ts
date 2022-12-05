import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-basic',
  templateUrl: './web-basic.component.html',
  styleUrls: ['./web-basic.component.css']
})
export class WebBasicComponent {
  constructor(
    private rou: Router
  ) {}

  ngOnInit(): void {

  }

  goToCourses(): void {
    this.rou.navigate(['courses']);
  }
}
