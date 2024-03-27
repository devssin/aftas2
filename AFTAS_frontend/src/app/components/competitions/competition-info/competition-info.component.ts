import { Component } from '@angular/core';
import { Competition } from 'src/app/core/models/Competition.model';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/user/user.selectors';
import { User } from 'src/app/core/models/User.model';

@Component({
  selector: 'app-competition-info',
  templateUrl: './competition-info.component.html',
  styleUrls: ['./competition-info.component.css']
})

export class CompetitionInfoComponent {
  constructor(private competitonService: CompetitionService,private route:ActivatedRoute,private store : Store) {}
  competition:Competition ={
    code: '',
    date: '',
    startTime: '',
    endTime: '',
    numberOfParticipants: 0,
    location: '',
    amount: 0,
    etat: '',
    rankings: [],
    huntings: []
  };
  id:String | null ='';
  choice:number=0;
  user:User|null ={
    id: 0,
    fullName: '',
    dateOfBirth: null,
    adress: '',
    email: '',
    password: '',
    role: '',
    accessionDate: '',
    nationality: '',
    identityDocument: '',
    identityNumber: ''
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('code');
        return this.competitonService.getOneCompetition(this.id);
      })
      ).subscribe(
        res => {
          this.competition = res;
        },
        error => {
          console.error('Erreur lors de la récupération du competition:', error);
        }
      );
      this.store.select(selectUser).subscribe(user => this.user = user)
  }
}
