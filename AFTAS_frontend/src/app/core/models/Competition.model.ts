import { Hunting } from "./Hunting.model"
import { Ranking } from "./Ranking.model"

export interface Competition {
    code:String | ''
    date:String | '' 
    startTime:String | ''
    endTime:String | ''
    numberOfParticipants:number | 0
    location:String | ''
    amount:number | 0
    etat:String | ''
    rankings:Ranking[]
    huntings:Hunting[]
}