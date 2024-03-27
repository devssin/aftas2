import { Component } from '@angular/core';
import { Level } from 'src/app/core/models/Level.model';
import { LevelService } from 'src/app/core/services/level.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-level-table',
  templateUrl: './level-table.component.html',
  styleUrls: ['./level-table.component.css']
})
export class LevelTableComponent {
  constructor(private levelService: LevelService) {}
  levels:Level[] =[];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  id:number = 0;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.levelService.getSomeData().subscribe(
      data => {
        this.levels = data
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
        this.levelService.deleteData(id).subscribe()
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
