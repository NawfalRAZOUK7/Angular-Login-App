import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.username = '';
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    const user: User = { username: this.username, email: this.email, password: this.password };
    this.authService.register(user).subscribe(response => {
      if (response !== null && response !== undefined) {
        console.log('Registration successful');
        // Optionally, you can navigate to another page after successful registration
      } else {
        console.log('Registration failed');
        // Optionally, you can display an error message to the user
      }
    });
  }
}
