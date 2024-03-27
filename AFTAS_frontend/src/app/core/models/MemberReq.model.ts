export interface MemberReq {
     num:number | 0
    name:String 
    familtyName:String 
    accessionDate:String 
    nationality:String 
    identityDocument:'CIN' | ''
    identityNumber:String 
}