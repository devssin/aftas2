import { Level } from "./Level.model"

export interface Fish {
    name:String | ''
    averageWeigth:DoubleRange | 0
    level:Level | null
}