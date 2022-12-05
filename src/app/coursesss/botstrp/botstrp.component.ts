import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botstrp',
  templateUrl: './botstrp.component.html',
  styleUrls: ['./botstrp.component.css']
})
export class BotstrpComponent {
  constructor(
    private rou: Router
  ) {}

  ngOnInit(): void {

  }

  goToCourses(): void {
    this.rou.navigate(['courses']);
  }
}
