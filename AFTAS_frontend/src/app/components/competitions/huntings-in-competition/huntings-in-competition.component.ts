import { Component, Input } from '@angular/core';
import { Fish } from 'src/app/core/models/Fish.model';
import { Hunting } from 'src/app/core/models/Hunting.model';
import { HuntingReq } from 'src/app/core/models/HuntingReq.model';
import { Ranking } from 'src/app/core/models/Ranking.model';
import { FishService } from 'src/app/core/services/fish.service';
import { HuntingService } from 'src/app/core/services/hunting.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-huntings-in-competition',
  templateUrl: './huntings-in-competition.component.html',
  styleUrls: ['./huntings-in-competition.component.css']
})
export class HuntingsInCompetitionComponent {
  @Input() rankings: Ranking[] = [];
  @Input() huntings: Hunting[] = [];
  @Input() code: String = '';
  @Input() etat: String = '';
  isShowAddForm : boolean = false;
  fishs:Fish[]=[]
  hunting:HuntingReq={
    id: 0,
    fish_name: '',
    numberOfFish: 0,
    member_num: 0,
    competition_code: ''
  }
  constructor(private fishService:FishService,private huntingService:HuntingService)
  {}

  ngOnInit()
  {
    this.fishService.getSomeData().subscribe(
      res => this.fishs = res
    )
  }

  closeAddForm()
  {
    this.isShowAddForm = false;
  }

  postData()
  {
    this.hunting.competition_code = this.code
    this.huntingService.postData(this.hunting).subscribe(
      ()=> {
        this.getHuntings()
        this.isShowAddForm = false
      }
    )
  }

  getHuntings()
  {
    this.huntingService.getByCompetition(this.code).subscribe(
      res => this.huntings = res
    )
  }

  delete(hunting:Hunting) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ['Cancel', 'OK'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.huntingService.deleteData(hunting.id).subscribe(
          (res)=>{

            if(res.message == "deleted"){
              this.getHuntings()
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            }else{
              swal({
                title: "Are you sure?",
                text: "this hunting not deleted!",
                icon: "warning",
                buttons: ['Cancel', 'OK'],
                dangerMode: true,
              })
            }
          }
        ) 
      }
    });
  }

}
