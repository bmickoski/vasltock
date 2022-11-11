import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /**
   * Angular form group
   */
  public form: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  login() {
    const value = this.form.value;

    if (value.username && value.password) {
      this.authService.login(value.username, value.password).subscribe({
        next: (data) => {
          this.router.navigateByUrl('/dashboard');
        },
        error: () => {
          this.form.setErrors({ incorrect: true });
        },
      });
    }
  }
}
