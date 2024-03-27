import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Ranking } from 'src/app/core/models/Ranking.model';
import { RankingService } from 'src/app/core/services/ranking.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent {
  constructor(private rankingService:RankingService,private route:ActivatedRoute){}
  rankings:Ranking[]=[]
  code:String|null=''
  getData(): Observable<any> {
    return this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('code');
        return this.rankingService.getData(id);
      }
      )
    );
  }
  ngOnInit()
  {
    this.getData().subscribe(res=>this.rankings = res)
  }
}
