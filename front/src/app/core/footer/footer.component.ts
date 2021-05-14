import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/Auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  logUser: any = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.logUser = this.authService.userData;
  }
}
