import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Meteor, Meteors } from './meteor.model'
import { HttpClient } from '@angular/common/http'

import { AppState } from './redux/app.state'
import { Observable } from 'rxjs'
import { GetMeteors, GetYearsList } from './redux/meteors.action'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public meteors: Meteor[] = []
  public meteorsState: Observable<Meteors>

  public noMeteorsByYear: boolean = false
  public noMeteorsByMass: boolean = false



  private baseUrl: string = 'https://data.nasa.gov/resource/y77d-th95.json'
  

  constructor(private store: Store<AppState>, private httpClient: HttpClient){
    this.get_nasa_data()
  }

  ngOnInit(){
    this.meteorsState = this.store.select('meteorsPage')
  }

  private get_nasa_data(){
    this.httpClient.get(this.baseUrl).subscribe((res:Meteor[])=>{
      for (let index = 0; index < res.length; index++) { 
        this.meteors.push(
                      new Meteor(
                        res[index].name, 
                        (new Date(res[index].year)).getFullYear(), 
                        parseInt(res[index].mass), 
                        res[index].recclass,
                        false, 
                        res[index].id)
                      )
      }
      this.store.dispatch(new GetMeteors(this.meteors))
      this.store.dispatch(new GetYearsList())
      return true
    })
  }

}

