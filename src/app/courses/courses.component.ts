import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
  constructor(
    // private router: Router
    private rout: Router
  ) {}

  ngOnInit(): void {

  }

  goTohtml(): void {
    this.rout.navigate(['html']);
  }

  // goToInstructor(): void {
  //   this.router.navigateByUrl('instructor');
  // }
}
