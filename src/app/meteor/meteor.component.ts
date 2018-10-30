import { Component, Input } from '@angular/core';
import {Meteor} from '../meteor.model'

@Component({
  selector: 'app-meteor',
  templateUrl: './meteor.component.html',
  styleUrls: ['./meteor.component.css']
})
export class MeteorComponent  {
  @Input() meteor: Meteor

  constructor() { }


}
