import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(user => {
      if (user !== null && user !== undefined) {
        console.log('Login successful');
        // Optionally, you can navigate to another page after successful login
      } else {
        console.log('Login failed');
        // Optionally, you can display an error message to the user
      }
    });
  }
}
