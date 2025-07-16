import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseComponent } from '../course/course.component';
import { courseData } from '../information/course-details';
import { studentData } from '../information/student-details';
import { retry } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  course_id:any = '';
  public allCourse:any = new courseData().courseDetails;
  stu_id:any = [];
  public allStudent:any = new studentData().studentLists;
  filterStd:any=[];
  constructor(private actRoute:ActivatedRoute){ 
      this.course_id = this.actRoute.snapshot.paramMap.get('id');
      console.log('The course id is :', this.course_id);
   } 
   ngOnInit(): void {
     this.courseDetails();
   }
  courseDetails(){
    let data = this.allCourse.find((cObj:any)=>{
      console.log(cObj);
      return cObj.course_id == this.course_id;
    });
    console.log('The course Details :', data);
    if(data){
       this.stu_id = data.student_id;
      console.log('All student details are enrolled to the course :', this.stu_id);
      this.getStudentDetails();
    }
    else{
      this.filterStd = this.allStudent;
      console.log('Displaying all the student details..', this.filterStd);
    }
  }
  getStudentDetails(){
    this.allStudent.filter((s:any)=>{
      console.log(s);
      this.stu_id.forEach((_id:any)=>{
        if(s.student_id == _id){
            this.filterStd.push(s);
        }
      });
    });
    console.log(this.filterStd);
  }
}