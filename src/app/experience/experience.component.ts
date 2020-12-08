import {Component, OnInit} from '@angular/core';
import {ExperienceModel} from '../model/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: ExperienceModel[] = [
    {
      experienceDate: 'Feb 2019 - Current',
      experienceJobPosition: 'Front-end developer',
      experienceCompanyLogo: '../../assets/addidas.png',
      experienceDescription: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    },
    {
      experienceDate: 'Aug 2016 - Feb 2018',
      experienceJobPosition: 'Full-stack developer',
      experienceCompanyLogo: '../../assets/hm.png',
      experienceDescription: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    },
    {
      experienceDate: 'Jun 2015 - Aug 2016',
      experienceJobPosition: 'Junior front-end developer',
      experienceCompanyLogo: '../../assets/nivea.png',
      experienceDescription: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
