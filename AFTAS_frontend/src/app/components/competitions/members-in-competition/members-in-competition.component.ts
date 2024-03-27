import { Component, Input } from '@angular/core';
import { Ranking } from 'src/app/core/models/Ranking.model';
import { RankingReq } from 'src/app/core/models/RankingReq.model';
import { User } from 'src/app/core/models/User.model';
import { MemberService } from 'src/app/core/services/member.service';
import { RankingService } from 'src/app/core/services/ranking.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-members-in-competition',
  templateUrl: './members-in-competition.component.html',
  styleUrls: ['./members-in-competition.component.css'],
})
export class MembersInCompetitionComponent {
  @Input() rankings: Ranking[] = [];
  @Input() code: String = '';
  @Input() etat: String = '';
  members: User[] = [];
  ranking: Ranking = {
    id: {
      member: {
        num: 0,
        name: '',
        familtyName: '',
        accessionDate: '',
        nationality: '',
        identityDocument: '',
        identityNumber: '',
      },
    },
    rank: 0,
    score: 0,
  };
  rankingReq: RankingReq = {
    id: {
      competition_code: '',
      member_num: 0,
    },
    rank: 0,
    score: 0,
  };
  constructor(
    private rankingService: RankingService,
    private memberService: MemberService
  ) {}

  ngOnInit() {
    this.memberService.getSomeData().subscribe((res) => (this.members = res));
  }
  removeTheMemberFromCompetition(ranking: Ranking) {
    swal({
      title: 'Are you sure?',
      text: 'you want to remove this member from competition',
      icon: 'warning',
      buttons: ['Cancel', 'OK'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.rankingService
          .deleteData(this.code, ranking.id.member.num)
          .subscribe(() =>
            {
              this.rankings.splice(this.rankings.indexOf(ranking),1)
            }
          );
          
        swal('the member removed from competition !', {
          icon: 'success',
        });

      } else {
        swal('Your concele this action!');
      }
    });
  }
  chooseTheMember(member_num: number) {
    this.rankingReq.id.member_num = member_num;
    this.rankingReq.id.competition_code = this.code;
    swal({
      title: 'Are you sure?',
      text: 'you want to add this member to competition',
      icon: 'warning',
      buttons: ['Cancel', 'OK'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.rankingService.postData(this.rankingReq).subscribe((res) => {
          this.ranking.id.member = res.id.member;
          this.ranking.rank = res.rank;
          this.ranking.score = res.score;
          if (
            this.rankings.findIndex(
              (rank) => rank.id.member.num === this.ranking.id.member.num
            ) != -1
          ) {
            swal('this member alread exists');
            return;
          }
          this.rankings.push(this.ranking);
          this.ranking = {
            id: {
              member: {
                num: 0,
                name: '',
                familtyName: '',
                accessionDate: '',
                nationality: '',
                identityDocument: '',
                identityNumber: '',
              },
            },
            rank: 0,
            score: 0,
          }
        });
        swal('the member added to competition !', {
          icon: 'success',
        });
      } else {
        swal('Your concele this action!');
      }
    });
  }
}
