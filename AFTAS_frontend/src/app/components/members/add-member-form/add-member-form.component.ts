import { Component } from '@angular/core';
import { MemberReq } from 'src/app/core/models/MemberReq.model';
import { MemberService } from 'src/app/core/services/member.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent {
  constructor(private memberService: MemberService) {}
  ngOnInit(){}
  member:MemberReq = {
    num: 0,
    name: '',
    familtyName: '',
    accessionDate: '',
    nationality: '',
    identityDocument: '',
    identityNumber: ''
  }
  
  postData()
  {
    this.memberService.postData(this.member).subscribe(
      ()=>swal("Member Created!", "You clicked the button!", "success")
    )
  }
}
