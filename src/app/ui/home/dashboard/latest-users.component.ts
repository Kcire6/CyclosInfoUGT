import { ChangeDetectionStrategy, Component, HostBinding, Injector, Input, OnInit } from '@angular/core';
import { UserAddressResultEnum, UserOrderByEnum, UserResult } from 'app/api/models';
import { UsersService } from 'app/api/services/users.service';
import { MenuService } from 'app/ui/core/menu.service';
import { BaseDashboardComponent } from 'app/ui/home/dashboard/base-dashboard.component';
import { ActiveMenu, Menu } from 'app/ui/shared/menu';
import { BehaviorSubject } from 'rxjs';

/**
 * Displays the latest users
 */
@Component({
  selector: 'latest-users',
  templateUrl: 'latest-users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestUsersComponent extends BaseDashboardComponent implements OnInit {

  @HostBinding('class-dashboard-icon-result') classIconResult = true;

  @Input() groups: string[];
  @Input() max: number;

  users$ = new BehaviorSubject<UserResult[]>(null);

  constructor(
    injector: Injector,
    private usersService: UsersService,
    private menu: MenuService) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.addSub(this.usersService.searchUsers({
      addressResult: UserAddressResultEnum.NONE,
      fromMenu: true,
      groups: this.groups,
      ignoreProfileFieldsInList: true,
      orderBy: UserOrderByEnum.CREATION_DATE,
      profileFields: ['image:true'],
      fields: ['id', 'display', 'image'],
      skipTotalCount: true,
      pageSize: this.max,
    }).subscribe(ads => {
      this.users$.next(ads);
    }));
  }

  path(user: UserResult): string {
    return `/users/${user.id}/profile`;
  }

  navigate(user: UserResult, event: MouseEvent) {
    this.menu.navigate({
      url: this.path(user),
      menu: new ActiveMenu(Menu.SEARCH_USERS),
      clear: false,
      event,
    });
  }
}
