import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/joblistings',     title: 'Job Listings',         icon:'nc-zoom-split',       class: '' },
    // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/activejobs',          title: 'Active Jobs',              icon:'nc-atom',      class: '' },
    // { path: '/activebids', title: 'Active Bids',     icon:'nc-watch-time',    class: '' },
    { path: '/createjob',          title: 'Create Job',      icon:'nc-simple-add',  class: '' },
    // { path: '/yourjobs',         title: 'Your Jobs',        icon:'nc-book-bookmark',    class: '' },
    // { path: '/profile',    title: 'Profile Settings',        icon:'nc-circle-10', class: '' },
   
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
