import { Component, OnInit } from '@angular/core';
import { ListUserBackendService } from './list-user-backend.service';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users: User;

  constructor(
    private _listUserBackend: ListUserBackendService
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
}
