import { RankingId } from './RankinId.model';

export interface Ranking {
  id: RankingId ;
  rank: number;
  score: number;
}
