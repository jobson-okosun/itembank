import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

// Menu Pachage
// import MetisMenu from 'metismenujs';

import { MENU, SCHEDULER_MENU } from './menu';
import { MenuItem } from './menu.model';
import { Account } from 'src/app/authentication/model/account.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-horizontal-topbar',
  templateUrl: './horizontal-topbar.component.html',
  styleUrls: ['./horizontal-topbar.component.scss'],
})
export class HorizontalTopbarComponent implements OnInit {
  currentUser: Account;
  menu: any;
  toggle: any = true;
  menuItems: MenuItem[] = [];
  authorMenu: MenuItem[] = [];
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @Output() mobileMenuButtonClicked = new EventEmitter();
  items: any;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private user: UserService,
    private ar: ActivatedRoute
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // this.currentUser = this.user.getCurrentUser();
    this.currentUser = this.user.getCurrentUser()
      ? this.user.getCurrentUser()
      : this.user.getCurrentUserAfterReload();

    // Menu Items
    let sidemenus = MENU;
    sidemenus.forEach((element) => {
      // Check if user has permission for parent menu item
      const hasParentPermission = element.role?.some((role) =>
        this.currentUser.authorities.includes(role)
      );

      if (hasParentPermission && !this.menuItems.includes(element)) {
        // If menu has subitems, filter them based on user roles
        if (element.subItems) {
          const filteredSubItems = element.subItems.filter((subItem) =>
            subItem.role
              ? subItem.role.some((role) =>
                  this.currentUser.authorities.includes(role)
                )
              : true
          );

          // Only add parent menu if it has accessible subitems
          if (filteredSubItems.length > 0) {
            const menuItem = { ...element, subItems: filteredSubItems };
            this.menuItems.push(menuItem);
          }
        } else {
          // Add menu item without subitems
          this.menuItems.push(element);
        }
      }
    });
  }

  /***
   * Activate droup down set
   */
  ngAfterViewInit() {
    this.initActiveMenu();
  }

  removeActivation(items: any) {
    // console.log(items);
    this.items = items;
    // console.log("remove");
    items.forEach((item: any) => {
      if (item.classList.contains('menu-link')) {
        if (!item.classList.contains('active')) {
          item.setAttribute('aria-expanded', false);
        }
        item.nextElementSibling
          ? item.nextElementSibling.classList.remove('show')
          : null;
      }
      if (item.classList.contains('nav-link')) {
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.remove('show');
        }
        item.setAttribute('aria-expanded', false);
      }
      item.classList.remove('active');
    });
  }

  // remove active items of two-column-menu
  activateParentDropdown(item: any) {
    // console.log("parent");
    // navbar-nav menu add active
    item.classList.add('active');
    let parentCollapseDiv = item.closest('.collapse.menu-dropdown');
    if (parentCollapseDiv) {
      // to set aria expand true remaining
      parentCollapseDiv.classList.add('show');
      parentCollapseDiv.parentElement.children[0].classList.add('active');
      parentCollapseDiv.parentElement.children[0].setAttribute(
        'aria-expanded',
        'true'
      );
      if (parentCollapseDiv.parentElement.closest('.collapse.menu-dropdown')) {
        parentCollapseDiv.parentElement
          .closest('.collapse')
          .classList.add('show');
        if (
          parentCollapseDiv.parentElement.closest('.collapse')
            .previousElementSibling
        )
          parentCollapseDiv.parentElement
            .closest('.collapse')
            .previousElementSibling.classList.add('active');
        parentCollapseDiv.parentElement
          .closest('.collapse')
          .previousElementSibling.setAttribute('aria-expanded', 'true');
      }
      return false;
    }
    return false;
  }

  updateActive(event: any) {
    // console.log("update me");
    const ul = document.getElementById('navbar-nav');

    if (ul) {
      const items = Array.from(ul.querySelectorAll('a.nav-link'));
      this.removeActivation(items);
    }
    this.activateParentDropdown(event.target);
  }

  initActiveMenu() {
    // console.log("init me");
    const pathName = window.location.pathname;
    const ul = document.getElementById('navbar-nav');

    if (ul) {
      const items = Array.from(ul.querySelectorAll('a.nav-link'));
      let activeItems = items.filter((x: any) =>
        x.classList.contains('active')
      );
      this.removeActivation(activeItems);
      let matchingMenuItem = items.find((x: any) => {
        return x.pathname === pathName;
      });
      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  toggleSubItem(event: any) {
    // console.log("sub");
    if (event.target && event.target.nextElementSibling)
      event.target.nextElementSibling.classList.toggle('show');
  }

  toggleItem(event: any) {
    // console.log("item");
    let isCurrentMenuId = event.target.closest('a.nav-link');

    let isMenu = isCurrentMenuId.nextElementSibling as any;
    let dropDowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
    dropDowns.forEach((node: any) => {
      node.classList.remove('show');
    });

    isMenu ? isMenu.classList.add('show') : null;

    const ul = document.getElementById('navbar-nav');
    if (ul) {
      const iconItems = Array.from(ul.getElementsByTagName('a'));
      let activeIconItems = iconItems.filter((x: any) =>
        x.classList.contains('active')
      );
      activeIconItems.forEach((item: any) => {
        item.setAttribute('aria-expanded', 'false');
        item.classList.remove('active');
      });
    }
    if (isCurrentMenuId) {
      this.activateParentDropdown(isCurrentMenuId);
    }
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className: any) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  updateActiveDropMenu() {
    let dropMenuActive = document.getElementsByClassName(
      'is-parent nav-link menu-link has-arrow active'
    );

    let normalLinkActive = document.getElementsByClassName(
      'side-nav-link-ref nav-link menu-link active'
    );

    if (normalLinkActive.length > 0 && dropMenuActive.length > 0) {
      let classToReplace = document.getElementsByClassName(
        'is-parent nav-link menu-link has-arrow active'
      );
      if (classToReplace.length > 0) {
        let result = classToReplace[0].classList.replace(
          'active',
          'text-secondary'
        );

        this.initActiveMenu();
        // console.log(result, "remove after");
      }
    } else if (dropMenuActive.length > 0) {
      let classToReplace = document.getElementsByClassName(
        'is-parent nav-link menu-link has-arrow'
      );
      let result = classToReplace[0].classList.replace(
        'text-secondary',
        'active'
      );
    }
  }
}
