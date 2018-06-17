import { Component, OnInit } from '@angular/core';
import { DetailUserBackendService } from './detail-user-backend.service';
import { User } from '../shared/models/user.model';
import { SharedVariablesService } from '../shared/services/shared-variavles.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  public user: User;
  public userId: string;

  constructor(
    private _detailtUserBackend: DetailUserBackendService,
    private _sharedVariablesService: SharedVariablesService
  ) { }

  ngOnInit() {
      this.userId = this._sharedVariablesService.getUser();
      this._getUserById();
  }

  private _getUserById = () => {
    this._detailtUserBackend.getUserById(this.userId)
      .subscribe(
        user => {
          console.log(user);
          this.user = user;
        },
        error => console.error('[DetailUserComponent._getUserById]: ' + error)
      );
  }
}
