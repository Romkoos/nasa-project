import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../redux/app.state'
import { FilterMeteorsByYear } from '../redux/meteors.action'

@Component({
  selector: 'app-yearpicker',
  templateUrl: './yearpicker.component.html',
  styleUrls: ['./yearpicker.component.css']
})
export class YearpickerComponent {

  constructor(private store: Store<AppState>) { }

  filterByYear(event){
    let targetYear:number = parseInt(event.target.value)
    this.store.dispatch(new FilterMeteorsByYear(targetYear))
  }

}
