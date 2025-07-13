import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
    selector: 'app-login-with-google',
    imports: [CommonModule],
    templateUrl: './login-with-google.component.html',
    styleUrl: './login-with-google.component.scss',
    standalone: true,
})
export class LoginWithGoogleComponent {
    auth = inject(Auth);

    async loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(this.auth, provider);
    }
}
