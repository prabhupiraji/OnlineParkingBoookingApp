import { Time } from "@angular/common"
import { TimeInterval } from "rxjs/internal/operators/timeInterval"

export class Parkingmodel {
     parkingdate:Date
     parkinghours:number
     // costperhr:Number
     parkingtime:Time
     costRupees:number
     parkingendTime:Time
     slotname:String
     bookingTime:Time
     user_id:number
}
