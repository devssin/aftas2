import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'src/app/core/models/Competition.model';
import { Ranking } from 'src/app/core/models/Ranking.model';
import { RankingReq } from 'src/app/core/models/RankingReq.model';
import { User } from 'src/app/core/models/User.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { RankingService } from 'src/app/core/services/ranking.service';
import { selectUser } from 'src/app/store/user/user.selectors';
import swal from 'sweetalert'

@Component({
  selector: 'app-all-competitions',
  templateUrl: './all-competitions.component.html',
  styleUrls: ['./all-competitions.component.css']
})
export class AllCompetitionsComponent {
  constructor(private competitonService: CompetitionService,private authService: AuthService , private rankingServive: RankingService ) {}
  competitions:Competition[] =[];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  page: number = 0;
  totalPages: number = 0;
  id:String = '';
  isByEtat:boolean=false;
  etat:String=''
  rankingReq:RankingReq ={
    id: {
      competition_code: '',
      member_num: 0,
    },
    rank: 0,
    score: 0
  }
  user : User | null = {
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
    console.log(this.authService.getAuthToken());
    this.getData(this.page);
    this.user = this.authService.getAuthUser()
  }

  getData(page:number) {
    this.competitonService.getSomeData(page).subscribe(
      data => {
        this.competitions = data.content
        this.totalPages = data.totalPages
        this.isByEtat=false
      }
    );
  }

  getDataByEtat(page:number,etat:String) {
    this.competitonService.getCompetitionsByEtat(etat,page).subscribe(
      data => {
        this.competitions = data.content
        this.totalPages = data.totalPages
        this.isByEtat=true
      }
    );
  }

  changeEtat()
  {
    this.page=0
    this.getDataByEtat(this.page,this.etat);
  }

  delete(id:String) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ['Cancel', 'OK'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.competitonService.deleteData(id).subscribe(
          ()=> this.getData(this.page)
        )
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {  
         swal("Your imaginary file is safe!");
      }
    });
  }

  showupdateForm(id:String)
  {
    this.isShowUpdateForm = true;
    this.id=id;
  }

  closeUpdateForm()
  {
    this.isShowUpdateForm = false;
    this.getData(this.page);
  }

  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getData(this.page);
  }

  nextPage()
  {
    if(this.page+2<=this.totalPages)
    {
      this.page=++this.page
      if(this.isByEtat)
      this.getDataByEtat(this.page,this.etat)
      else
      this.getData(this.page)
    } 
  }

  prevPage()
  {
    if(this.page-1>=0)
    {
      this.page = --this.page;
      if(this.isByEtat)
      this.getDataByEtat(this.page,this.etat)
      else
      this.getData(this.page)
    } 
  }

  joinTheCompetition(code: String) {
    this.rankingReq.id.member_num  = this.user? this.user.id : 0;
    this.rankingReq.id.competition_code = code;
    swal({
      title: 'Are you sure?',
      text: 'you want to join this competition ?',
      icon: 'warning',
      buttons: ['Cancel', 'OK'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.rankingServive.postData(this.rankingReq).subscribe(() => {});
        swal('welcome to competition !', {
          icon: 'success',
        });
      } else {
        swal('Your concele this action!');
      }
    });
  }
  isExist(rankings : Ranking[])
  {
    console.log(this.user?.id)
    return rankings.findIndex(
      (rank) => rank.id.member.num === this.user?.id
    ) == -1
  }
}
