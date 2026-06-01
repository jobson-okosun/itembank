import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  token: string = '';
  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.ar.snapshot.paramMap.get('token');
  }

}
