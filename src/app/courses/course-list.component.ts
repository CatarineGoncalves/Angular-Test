// import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    course: Course [] = [];

    ngOnInit(): void{
        this.course = [
            {
                id: 1,
                imageUrl:'',
                name:'Angular Forms',
                price: 99.99,
                code: 's1CPS-9796',
                rating: 4.5,
                releaseDate: '19 de Marco',    
                duration: 119
            },
           {    
                id: 2,
                imageUrl:'',
                name:'Angular HTTP',
                price: 49.99,
                code: 'SSQ-9796',
                rating: 1.5,
                releaseDate: '18 de Marco',
                duration: 79
            }
        ]   
    }
}