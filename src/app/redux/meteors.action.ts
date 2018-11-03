import { Action } from "@ngrx/store"

export namespace METEOR_ACTION {
    export const GET_DATA = 'GET_DATA'
    export const FILTER_BY_YEAR = 'FILTER_BY_YEAR'
    export const FILTER_BY_MASS = 'FILTER_BY_MASS'
    export const GET_YEARS_LIST = 'GET_YEARS_LIST'
    
}
export class GetMeteors implements Action {
    readonly type = METEOR_ACTION.GET_DATA
    constructor (public payload: any) {}
}

export class FilterMeteorsByYear implements Action {
    readonly type = METEOR_ACTION.FILTER_BY_YEAR
    constructor (public payload: number) {}

}
export class FilterMeteorsByMass implements Action {
    readonly type = METEOR_ACTION.FILTER_BY_MASS
    constructor (public payload: number) {}
    

}

export class GetYearsList implements Action{
    readonly type = METEOR_ACTION.GET_YEARS_LIST
}

export type MeteorsActions = GetMeteors | FilterMeteorsByYear | FilterMeteorsByMass | GetYearsList