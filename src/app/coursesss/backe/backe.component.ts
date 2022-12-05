import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backe',
  templateUrl: './backe.component.html',
  styleUrls: ['./backe.component.css']
})
export class BackeComponent {
  constructor(
    private rou: Router
  ) {}

  ngOnInit(): void {

  }

  goToCourses(): void {
    this.rou.navigate(['courses']);
  }
}
