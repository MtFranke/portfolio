import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectModel[] = [
    {
      projectName: 'Recipe Blog',
      projectDescription: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
      projectStack: ['HTML', 'CSS', 'responsive'],
      projectDemo: 'http',
      projectRepo: ' '
    },
    {
      projectName: 'My Gallery',
      projectDescription: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ',
      projectStack: ['HTML', 'CSS', 'responsive'],
      projectDemo: 'http',
      projectRepo: ' '
    },
    {
      projectName: 'Checkout',
      projectDescription: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ',
      projectStack: ['HTML', 'CSS', 'responsive'],
      projectDemo: 'http',
      projectRepo: ' '
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
