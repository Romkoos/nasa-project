import { Meteor } from "../meteor.model"

export interface AppState{
    meteorsPage : {
        meteors : Meteor[],
        yearsList : [],
        activeYear : number,
        errors : {
            noMeteorsByYear : boolean,
            noMeteorsByMass : boolean,
            noMeteors: boolean
        }  
    }
}