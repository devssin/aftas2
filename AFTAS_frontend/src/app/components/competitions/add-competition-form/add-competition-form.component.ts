import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CompetitionReq } from 'src/app/core/models/CompetitionReq.model';
import { CompetitionService } from 'src/app/core/services/competition.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-competition-form',
  templateUrl: './add-competition-form.component.html',
  styleUrls: ['./add-competition-form.component.css']
})
export class AddCompetitionFormComponent {
  constructor(private competitionService: CompetitionService , private datePipe : DatePipe) {}
  ngOnInit(){}
  error:String[]=[];
  competition:CompetitionReq = {
    date: new Date(),
    startTime: '',
    endTime: '',
    numberOfParticipants: 0,
    location: '',
    amount: 0,
    code: ''
  }

  save() {
    // Generate the code
    const locationCode = this.competition.location.slice(0, 3).toLowerCase();
    const dateCode = this.datePipe.transform(this.competition.date, 'dd-MM-yy');
    this.competition.code = `${locationCode}-${dateCode}`;

    // Save the competition
    this.postData()
  }
  
  postData()
  {
    this.competitionService.postData(this.competition).subscribe(
      (res)=>{
        console.log(res.error)
        if(res.errors)
        {
          this.error = res.errors
        }else
        swal("Competition Created!", "You clicked the button!", "success")
      },
      error => {
        this.error = error.error.errors
        console.log(this.error)
      }
    )
  }
}
