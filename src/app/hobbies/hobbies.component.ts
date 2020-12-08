import {Component, OnInit} from '@angular/core';
import {HobbyModel} from '../model/hobby.model';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  hobbies: HobbyModel[] = [
    {name: 'Gaming', description: 'Quisque feugiat malesuada molestie.', image: 'assets/gaming.png'},
    {name: 'Cooking', description: 'Quisque feugiat malesuada molestie.', image: 'assets/cooking.png'},
    {name: 'Biking', description: 'Quisque feugiat malesuada molestie.', image: 'assets/biking.png'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
