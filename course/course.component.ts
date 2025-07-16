import { Component } from '@angular/core';
import { courseData } from '../information/course-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private route:Router){}
  public allCourseLists:any = new courseData().courseDetails;
  view(c:any){
    console.log(c);
    let cid = c.course_id;
    console.log("The course id is :", cid);
    this.route.navigate(["/student",cid]);
  }
}
