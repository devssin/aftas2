import { Component } from '@angular/core';
import { Level } from 'src/app/core/models/Level.model';
import { LevelService } from 'src/app/core/services/level.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-level-form',
  templateUrl: './add-level-form.component.html',
  styleUrls: ['./add-level-form.component.css']
})
export class AddLevelFormComponent {
  constructor(private levelService: LevelService) {}
  ngOnInit(){}
  level:Level = {
    code: 0,
    description: '',
    points: 0
  }
  postData()
  {
    this.levelService.postData(this.level).subscribe(
      ()=>swal("Level Created!", "You clicked the button!", "success")
    )
  }
}