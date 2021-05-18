import { SharedService } from './../../shared/services/shared.service';
import { Component} from '@angular/core';
import { AuthService } from 'src/app/shared/services/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{
  logUser: any = false;
  counterShows: number = 0;
  disableRepertoar: boolean = true;
  constructor(private authService: AuthService, private sharedService: SharedService) {
      if(this.authService.currentUserValue) {
        this.logUser = true;
      }
  }
  
  ngOnInit(): void {
    this.sharedService.manipulateShowSubject.subscribe(data => { 
        this.counterShows = data.length;
    })
    if(JSON.parse(localStorage.getItem('USER_DATA')).username !== 'admin'){
      this.disableRepertoar = false;
    }
  }
  

  logout() {
    this.authService.logout();
  }
}
