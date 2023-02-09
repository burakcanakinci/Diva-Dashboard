import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  username = '';
  password = '';
  
  constructor(private router: Router, public dialog: MatDialog) {}

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    if (username == 'admin' && password == 'admin') {
      this.router.navigate(['dashboard-page'], { queryParams: { username: username, password: password } });
      console.log('true');
    } else {
      this.router.navigate(['']);
      console.log(username, password);
    }
    this.dialog.closeAll();
  }
}
