import { Component, Input } from '@angular/core';
import { Level } from 'src/app/core/models/Level.model';
import { LevelService } from 'src/app/core/services/level.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-update-level-form',
  templateUrl: './update-level-form.component.html',
  styleUrls: ['./update-level-form.component.css']
})
export class UpdateLevelFormComponent {
  constructor(private levelService: LevelService) {}
  level:Level = {
    code: 0,
    description: '',
    points: 0
  }
  @Input() id: number=0;
  ngOnInit(){
    this.levelService.getOneLevel(this.id).subscribe(
      res=>{
        this.level.code = res.code
        this.level.description = res.description
        this.level.points = res.points
      }
    )
  }
  putData(id:number)
  {
    this.levelService.putData(this.level,id).subscribe(
      ()=>swal("Level Updated!", "You clicked the button!", "success")
    )
  }
}