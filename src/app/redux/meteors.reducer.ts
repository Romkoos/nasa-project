import { METEOR_ACTION, MeteorsActions } from './meteors.action'
import { Meteor } from '../meteor.model'

const initialState = {
    meteors : []
}

export function meteorsReducer(state = initialState, action: MeteorsActions){

    switch (action.type){
        case METEOR_ACTION.GET_DATA:
            return {
                ...state,
                meteors: [...action.payload]
            }

        case  METEOR_ACTION.GET_YEARS_LIST:
            const meteorsListSortedByYears = state.meteors
            const yearsArray = []
            for (let i in meteorsListSortedByYears){ 
               yearsArray.push(meteorsListSortedByYears[i].year)
                 
            }
            yearsArray.sort(function (a, b) {return a - b})
            let yearsArrayFiltered = yearsArray.filter((v, i, a) => a.indexOf(v) === i)
            return {
                ...state,
                yearsList: [...yearsArrayFiltered]
            }
        case METEOR_ACTION.FILTER_BY_YEAR:

            const newState = state
            const meteorsList = newState.meteors
            let targetYear = action.payload
            let hiddenElements: number = 0
            let isError: boolean = false
            let isFatalError: boolean = false
            let ayear: number = 0

            if(targetYear !== 0){
                for (let i in meteorsList){
                    if(meteorsList[i].year !== targetYear){
                        meteorsList[i].hidden = true
                        hiddenElements++;  
                    }
                    else{
                        meteorsList[i].hidden = false
                        hiddenElements--
                    }
                }
                ayear = targetYear     
            }else{
                for (let i in meteorsList){
                    meteorsList[i].hidden = false
                    hiddenElements = 0
                }
                ayear = 0
            }
            if(hiddenElements === meteorsList.length) isError = true

            return {
                ...state,
                meteors: [...meteorsList],
                activeYear: ayear,
                errors : {
                    noMeteorsByYear : isError
                }
            }

        case METEOR_ACTION.FILTER_BY_MASS:
            const newStateFBYear = state
            const meteorsListFBYear = newStateFBYear.meteors
            const targetMass = action.payload
            let meteorsListByMass: Meteor[] = []
            let closestMeteor 
            let activeYear: number
            
            if(targetMass !== undefined && targetMass !== null && !isNaN(targetMass) ){ 
                const result = meteorsListFBYear.find( sortedByMass => sortedByMass.mass === targetMass)

                if(!result || result.hidden){
                    closestMeteor = closest(meteorsListFBYear, targetMass)
                    if(closestMeteor){
                        for (let i in meteorsListFBYear){ 
                            meteorsListFBYear[i].hidden = (meteorsListFBYear[i].id !== closestMeteor.id) ? true : false 
                        }
                        closestMeteor.hidden = false
                        meteorsListByMass = closestMeteor
                        activeYear = closestMeteor.year
                        isError = true
                        isFatalError = false
                    }else{
                        for (let i in meteorsListFBYear) meteorsListFBYear[i].hidden = false
                        isFatalError = true
                    }
                    
                }else{
                    meteorsListByMass = result
                    isError = false
                }
            }else{
                for (let i in meteorsListFBYear){ 
                    meteorsListFBYear[i].hidden = false
                }
                isFatalError = true
            }
            
            return {
                ...state,
                meteors: [...meteorsListFBYear],
                activeYear : activeYear,
                errors : {
                    noMeteorsByMass : isError,
                    noMeteors: isFatalError
                }
            }
        default:
            return state
    }
}

function closest(array,num){
    let minDiff=1000
    let ans;
    for(let i in array){
         var m=Math.abs(num-array[i].mass)
         if(m<minDiff){ 
                minDiff=m
                ans=array[i] 
            }
      }
    return ans;
}