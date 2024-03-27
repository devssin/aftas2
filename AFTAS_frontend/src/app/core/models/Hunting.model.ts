import { FishReq } from "./FishReq.model"
import { MemberReq } from "./MemberReq.model"

export interface Hunting {
    id:number | 0
    fish:FishReq | null
    numberOfFish:number | 0
    member:MemberReq 
}