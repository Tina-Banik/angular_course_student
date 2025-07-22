This project is a simple Angular application that demonstrates a student and course enrollment system. It allows users to view a list of courses and, upon clicking a course, see the students enrolled in it. A key feature is its handling of courses with no enrolled students: in such cases, it displays all available students.
Features :
Course Listing: View all available courses.
Student Enrollment per Course: Click on a course to see the students specifically enrolled in that course.
"No Enrollment" Fallback: If a course has no students enrolled, the system intelligently displays a list of all students.
Technologies Used
Angular
HTML
CSS
TypeScript
Usage Example
Imagine you have courses like "Mathematics," "Physics," and "Literature."
If you click "Mathematics," you'll see students A, B, and C (if they are enrolled).
If you click "Students" you'll see students A, B, C, D, E, F (all students).
