import { Injectable, inject, signal } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  currentUser = signal<any | null>(null);

  constructor() {
    this.auth.onAuthStateChanged((user) => {
      this.currentUser.set(user);
    });
  }

  async loginComGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);

      this.router.navigate(['/meus-cursos']);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/']);
  }
}
