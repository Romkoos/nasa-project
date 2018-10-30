import { Component } from '@angular/core';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { FilterMeteorsByMass } from '../redux/meteors.action';

@Component({
  selector: 'app-massfilter',
  templateUrl: './massfilter.component.html',
  styleUrls: ['./massfilter.component.css']
})

export class MassfilterComponent {

  constructor(private store: Store<AppState>) { }

  filterByMass(mass){
    this.store.dispatch(new FilterMeteorsByMass(parseInt(mass)))
  }
}
