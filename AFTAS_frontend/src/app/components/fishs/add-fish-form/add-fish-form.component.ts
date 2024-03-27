import { Component } from '@angular/core';
import { FishReq } from 'src/app/core/models/FishReq.model';
import { Level } from 'src/app/core/models/Level.model';
import { FishService } from 'src/app/core/services/fish.service';
import { LevelService } from 'src/app/core/services/level.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-fish-form',
  templateUrl: './add-fish-form.component.html',
  styleUrls: ['./add-fish-form.component.css']
})
export class AddFishFormComponent {
  constructor(private fishService: FishService,private levelService : LevelService) {}
  fish:FishReq = {
    name: '',
    averageWeigth: 0,
    levelId: 0
  }
  levels:Level[]=[];
  ngOnInit(){
    this.levelService.getSomeData().subscribe(
      res => this.levels = res
    )
  }
  postData()
  {
    this.fishService.postData(this.fish).subscribe(
      ()=>swal("fish Created!", "You clicked the button!", "success")
    )
  }
}
