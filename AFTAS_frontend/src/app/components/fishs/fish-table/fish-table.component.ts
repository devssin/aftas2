import { Component } from '@angular/core';
import { Fish } from 'src/app/core/models/Fish.model';
import { FishReq } from 'src/app/core/models/FishReq.model';
import { FishService } from 'src/app/core/services/fish.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-fish-table',
  templateUrl: './fish-table.component.html',
  styleUrls: ['./fish-table.component.css']
})
export class FishTableComponent {
  constructor(private fishService: FishService) {}
  fishs:Fish[] =[];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  id:String = '';

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.fishService.getSomeData().subscribe(
      data => {
        this.fishs = data
      }
    );
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
        this.fishService.deleteData(id).subscribe()
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        this.getData()
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
    this.getData();
  }

  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getData();
  }
}
