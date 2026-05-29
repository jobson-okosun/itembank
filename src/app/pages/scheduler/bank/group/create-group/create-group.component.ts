import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

createGroup(name:string){

  
    Swal.fire({
      title: `${name} Created Successfully`,
      // text: 'You clicked the button!',
      icon: 'success',
      // showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'OK'
    });


  this.route.navigate(['group'])
}

cancel(){
 this.route.navigate(['group'])
}


}
