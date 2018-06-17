import { Component, OnInit } from '@angular/core';
import { ListUserBackendService } from './list-user-backend.service';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { SharedVariablesService } from '../shared/services/shared-variavles.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})

export class ListUserComponent implements OnInit {

  public users: User;

  constructor(
    private _listUserBackend: ListUserBackendService,
    private _router: Router,
    private _sharedVariablesService: SharedVariablesService
  ) { }

  ngOnInit() {
    this._getAllUser();
  }

  private _getAllUser = () => {
    this._listUserBackend.getAllUser()
      .subscribe(
        users => {
          console.log(users);
          this.users = users;
        },
        error => console.error('[ListUserComponent._getAllUser]: ' + error)
      );
  }

  public setUser = (userId: string) => {
    this._sharedVariablesService.setUser(userId);

    this.redirect();
  }

  public redirect = (): void => {
    this._router.navigate(['/detail-user']);
  }

  public genderImg = (gender: string) => {
    if (gender === 'female') {
      return 'assets/imgs/people-female.png';
    } else {
      return 'assets/imgs/people.png';
    }
  }
}
