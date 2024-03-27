package com.api.AFTAS.domains.ranking;

import com.api.AFTAS.domains.competition.Competition;
import com.api.AFTAS.security.User.User;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Embeddable
@Data
public class RankingId {
    @ManyToOne
    @JoinColumn(name = "competition_code")
    private Competition competition;

    @ManyToOne
    @JoinColumn(name = "member_num")
    private User member;
    public RankingId(Competition competition, User member) {
        this.competition = competition;
        this.member = member;
    }
    public RankingId()
    {
    }
}
