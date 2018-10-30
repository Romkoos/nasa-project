export class Meteor{
    constructor(
        public name: string,
        public year: number,
        public mass: any,
        public recclass: string,
        public hidden: boolean,
        public id: string
    ){}
}

export interface Meteors{
    meteors: Meteor[]
}