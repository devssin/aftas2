import { Component } from '@angular/core';
import { User } from 'src/app/core/models/User.model';
import { MemberService } from 'src/app/core/services/member.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css']
})
export class MemberTableComponent {
  constructor(private memberService: MemberService) {}
  members:User[] =[];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  id:number = 0;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.memberService.getSomeData().subscribe(
      data => {
        this.members = data
      }
    );
  }

  delete(id:number) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ['Cancel', 'OK'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.memberService.deleteData(id).subscribe()
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        this.getData()
      } else {
         swal("Your imaginary file is safe!");
      }
    });
  }

  showupdateForm(id:number)
  {
    this.isShowUpdateForm = true;
    this.id=id;
  }

  closeUpdateForm()
  {
    this.isShowUpdateForm = false;
    this.getData();
  }

  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getData();
  }
}
