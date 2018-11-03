import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../redux/app.state'
import { FilterMeteorsByYear, GetYearsList } from '../redux/meteors.action'
import { Observable } from 'rxjs';
import { Meteors } from '../meteor.model';

@Component({
  selector: 'app-yearpicker',
  templateUrl: './yearpicker.component.html',
  styleUrls: ['./yearpicker.component.css']
})
export class YearpickerComponent {
  public meteorsState: Observable<Meteors> 


  @Input() yearsList:[]

  constructor(private store: Store<AppState>) {
    this.meteorsState = this.store.select('meteorsPage')
  }

  filterByYear(event){
    let targetYear:number = parseInt(event.target.value)
    this.store.dispatch(new FilterMeteorsByYear(targetYear))
  }

}
