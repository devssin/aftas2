export interface CompetitionReq {
    code:String | ''
    date:Date | string 
    startTime:String | ''
    endTime:String | ''
    numberOfParticipants:number | 0
    location:String | ''
    amount:number | 0
}