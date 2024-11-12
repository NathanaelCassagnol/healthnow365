import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TopNavMenuItem } from '../topnavmenu.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconSpinnerTransition } from '../../../transitions';

@Component({
  selector: 'app-menu-dropdown-button',
  styles: '',
  templateUrl: './menu-dropdown-button.component.html',
  animations: [trigger('iconspinner', IconSpinnerTransition(100))],
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, CommonModule, MatTooltipModule],
})
export class MenuDropdownButtonComponent {
  @Input() item?: TopNavMenuItem;
  @Output() HandleItemClick: EventEmitter<TopNavMenuItem> = new EventEmitter();

  getTooltip(tooltip?: string | Signal<string>) {
    if (tooltip == null) return '';
    if (typeof tooltip == 'string') return tooltip;
    return tooltip();
  }
}
