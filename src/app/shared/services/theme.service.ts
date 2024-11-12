import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Behavior: If we explicitly set the theme, keep it on that theme
// Otherwise, go with browser default, and update on browser update
// Get and set through isDark
export class ThemeService {
  private _isDark: boolean = false;
  private _explicitlySet: boolean = false;
  get isDark() {
    return this._isDark;
  }
  set isDark(newVal: boolean) {
    this._isDark = newVal;
    this._explicitlySet = true;
    if (typeof sessionStorage !== 'undefined') sessionStorage.setItem('isDarkMode', newVal ? 'true' : 'false');
    this.updateBodyDarkMode();
  }

  updateBodyDarkMode() {
    if (!this._isDark && document.body.classList.contains('my-dark-theme'))
      document.body.classList.remove('my-dark-theme');
    else if (this._isDark && !document.body.classList.contains('my-dark-theme'))
      document.body.classList.add('my-dark-theme');
  }

  constructor() {
    // Set the initial color theme. If we have a current session storage value set, then defer to that automatically. If not,
    // we try to use the system's color theme preference (Windows, Mac, Android, etc).
    let sessionDark = typeof sessionStorage == 'undefined' ? 'false' : sessionStorage.getItem('isDarkMode');
    if (sessionDark != null) {
      this._isDark = sessionDark === 'true';
      this._explicitlySet = true;
    } else {
      this._isDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Watch for changes to the system default theme, so we can potentially change the app theme (if a user override isn't present).
    if (typeof window !== 'undefined') {
      fromEvent<MediaQueryList>(window.matchMedia('(prefers-color-scheme: dark)'), 'change')
        .pipe(takeUntilDestroyed())
        .subscribe(ev => {
          if (!this._explicitlySet) {
            // There is still no override set. Defer to the new system default theme.
            this._isDark = ev.matches;
          }
        });
    }

    // Update on initialization
    this.updateBodyDarkMode();
  }
}
