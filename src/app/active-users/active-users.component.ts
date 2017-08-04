import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  private users: string[];
  
  constructor(private usersService: UsersService){
    this.users = this.usersService.activeUsers;

  }
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
  onSetToInactive(index: number){
    this.usersService.onSetToInactive(index);
  }
}
