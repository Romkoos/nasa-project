import { Meteor } from "../meteor.model"

export interface AppState{
    meteorsPage : {
        meteors : Meteor[],
        errors : {
            noMeteorsByYear : boolean,
            noMeteorsByMass : boolean,
            noMeteors: boolean
        }  
    }
}