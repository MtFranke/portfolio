import { Component, OnInit } from '@angular/core';
import {SkillModel} from '../model/skill.model';

@Component({
  selector: 'app-front-end-skills',
  templateUrl: './front-end-skills.component.html',
  styleUrls: ['./front-end-skills.component.scss']
})
export class FrontEndSkillsComponent implements OnInit {

  skills: SkillModel[] = [
    {name: 'React', percentage: 60},
    {name: 'Javascript', percentage: 80},
    {name: 'CSS', percentage: 90},
    {name: 'VUE', percentage: 40},
    {name: 'Redux', percentage: 80},
    {name: 'React Native', percentage: 90}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
