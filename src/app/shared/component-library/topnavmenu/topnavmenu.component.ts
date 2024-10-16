import {
  Component,
  DestroyRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  Signal,
  inject,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
// import { UserInfo } from 'services/user/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuDropdownButtonComponent } from './menu-dropdown-button/menu-dropdown.button.component';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../../../services/user/user.service';
import { klona as clone } from 'klona';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfigService } from '../../services/config.service';
import { trigger } from '@angular/animations';
import { collapseTransitionY, fadeTransition, IconSpinnerTransition, slideTransition } from '../../transitions';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-topnavmenu',
  styleUrls: ['topnavmenu.component.scss'],
  templateUrl: 'topnavmenu.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MenuDropdownButtonComponent,
    CommonModule,
    MatTooltipModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
    MatToolbarModule,
  ],
  animations: [
    trigger('slideLeft', slideTransition(200, '300px', '0')),
    trigger('fade', fadeTransition(200)),
    trigger('iconspinner', IconSpinnerTransition(100)),
    trigger('collapse', collapseTransitionY(200)),
  ],
})
export class TopnavmenuComponent implements OnChanges, OnInit {
  @Input() middleItems: TopNavMenuItem[] = [];
  @Input() settingsItems: TopNavMenuItem[] = [];
  @Input() accountItems: TopNavMenuItem[] = [];
  @Input() user?: UserInfo | null;
  @Input() title?: string;
  @Input() showAccount: boolean = false;

  @Output() navigate: EventEmitter<string> = new EventEmitter<string>();
  @Output() titleClick: EventEmitter<void> = new EventEmitter<void>();

  FilteredItems!: TopNavMenuItem[];

  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  themeSvc = inject(ThemeService);
  config = inject(ConfigService);

  HandleItemClick(item: TopNavMenuItem) {
    // Case 2 - Submenu Button
    // Is this a parent element for a set of submenus? If so, this click action only expands/collapses.
    if (item.Submenus?.length) {
      item.SubmenuOpen = !item.SubmenuOpen;
      return;
    }
    // Case 3 - Normal Link Button
    // Attempt to navigate to the action route, if one is defined.
    if (item.ActionRoute && !!item.ActionRoute.length) {
      const newroute = item.ActionRoute;
      this.router.navigate(newroute);
      this.sideMenuOpen = false;
    } else if (item.ActionFn != undefined) {
      // this.ReturnText.emit(item.ReturnText);
      item.ActionFn();
    }
  }
  ngOnInit() {
    // Hook into the router event structure so we can monitor successful route changes in order to
    // update the active button (and also remove buttons which may not apply).
    this.router.events
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(event => event instanceof NavigationEnd),
        map(event => {
          const navev: NavigationEnd = event as NavigationEnd;
          return navev.url;
        })
      )
      .subscribe(url => this.UpdateItemActiveVariable(url));

    setTimeout(() => (this.anyWraps = this.TestWraps()));
    this.SetSubmenusToClosed();
  }

  ngOnChanges() {
    this.UpdateVisibleItems();
    this.UpdateItemActiveVariable(this.router.routerState.snapshot.url);
  }

  sideMenuOpen = false;
  OpenSideMenu() {
    this.sideMenuOpen = true;
  }
  CloseSideMenu() {
    this.sideMenuOpen = false;
  }
  ToggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

  private UpdateVisibleItems() {
    // Process the menu items against the user (if available) to determine which are available.
    const itemRoleFilter = (itm: TopNavMenuItem) =>
      !itm.Exclude &&
      (itm.AllowedRoles?.includes('all') ||
        (this.user?.CurrentRole && itm.AllowedRoles?.includes(this.user.CurrentRole.RoleName)));

    this.FilteredItems = clone((this.middleItems || []).filter(itemRoleFilter));

    // Filter submenus and flatten menus with only one item
    this.FilteredItems.forEach((i, index) => {
      i.Submenus = i.Submenus?.filter(itemRoleFilter);
      if (i.Submenus && i.Submenus.length === 1) {
        this.FilteredItems[index] = i.Submenus[0];
      }
    });
  }

  private UpdateItemActiveVariable(url: string = this.router.routerState.snapshot.url) {
    const parsedUrl = url.replace(/^\/(.*?)\/(.*)$/, '~/$2');
    let activeCondition = (item: TopNavMenuItem) =>
      !!item.LinkedStates?.find(value => value.indexOf(url) >= 0 || value.indexOf(parsedUrl) >= 0);

    // Set each menu and submenu item as active or inactive
    this.FilteredItems.forEach(item => {
      item.Active = activeCondition(item);
      if (item.Submenus) item.Submenus.forEach(subitem => (subitem.Active = activeCondition(subitem)));
    });
  }

  private SetSubmenusToClosed(item?: TopNavMenuItem) {
    if (item == null) {
      this.middleItems.forEach(i => this.SetSubmenusToClosed(i));
      this.settingsItems.forEach(i => this.SetSubmenusToClosed(i));
      this.accountItems.forEach(i => this.SetSubmenusToClosed(i));
    } else {
      item.SubmenuOpen = false;
      if (item.Submenus?.length) item.Submenus.forEach(i => this.SetSubmenusToClosed(i));
    }
  }

  private prevWidth = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > this.prevWidth) {
      // Window grew; test if the navbar will fit in full-width
      if (this.anyWraps) {
        this.anyWraps = false;
        setTimeout(() => {
          this.anyWraps = this.TestWraps();
          if (!this.anyWraps) this.sideMenuOpen = false;
        });
      }
    } else {
      // Window didn't grow; if something new wrapped, set anyWraps to true
      if (!this.anyWraps) {
        this.anyWraps = this.TestWraps();
      }
    }
    this.prevWidth = window.innerWidth;
  }

  anyWraps: boolean = false;
  private TestWraps(): boolean {
    // Test to see if any flex-row with class 'test-wrap' has wrapped
    let wrap = false;
    let wrapElements = document.getElementsByClassName('test-wrap');
    for (let a = 0; a < wrapElements.length; a++) {
      // 'item' is the flex-row with 'test-wrap'
      let item = wrapElements.item(a);
      if (!item) continue;

      let children = item.children;
      let top: number | null = null;
      for (let b = 0; b < children.length; b++) {
        // Compare each child's height; if there is a difference, it probably wrapped
        let subitem = children.item(b);
        if (!subitem) continue;

        let myTop = subitem.getBoundingClientRect().top;
        if (top == null) top = myTop;
        else if (top != myTop) wrap = true;
      }
    }
    return wrap;
  }

  getTooltip(tooltip?: string | Signal<string>) {
    if (tooltip == null) return '';
    if (typeof tooltip == 'string') return tooltip;
    return tooltip();
  }
}

export class TopNavMenuItem {
  MenuText: string = '';
  MenuIcon?: string;
  ActionRoute?: any[];
  ActionFn?: Function;
  LinkedStates?: string[];
  AllowedRoles?: string[];
  Type?: 'About' | 'Home' | 'Logout' | 'Link' = 'Link';
  Color?: string;
  Active?: boolean;
  Exclude?: boolean;
  Disabled?: boolean | Signal<boolean>;
  Tooltip?: string | Signal<string>;

  Submenus?: TopNavMenuItem[];
  SubmenuOpen?: boolean;
}