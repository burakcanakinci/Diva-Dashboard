import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModalService } from 'src/app/services/login-modal.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements MatMenuModule {
  currentDate: Date = new Date();
  toggle: boolean = false;
 
  constructor(
    private route: Router, 
    private loginModalService: LoginModalService, 
    public dialog: MatDialog, 
    public matMenu: MatMenuModule,
    ) {}

  adminPage() {
    this.route.navigate(['/dashboard-page']);
  }
  homePage() {
    this.route.navigate(['']);
  }

  openDialog(): void {
    this.dialog.open(LoginModalComponent, {
      height: '254px',
      width: '300px',
    });
  }
}
