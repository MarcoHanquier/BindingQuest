import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {



  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    ageVisible : true
  };
ageVisible = true;


toggleAge(){
  if (this.ageVisible === false) {
    this.ageVisible = true;
  } else if (this.ageVisible === true) {
    this.ageVisible = false;
  }

}

}
