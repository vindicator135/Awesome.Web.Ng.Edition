import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
   type?: string;
   icon?:string;
	badgeType?: string;
	badgeValue?: string;
   active?: boolean;
   megaMenu?: boolean;
   megaMenuType?: string; // small, medium, large
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() {   }

  MENUITEMS: Menu[] = [
    { 
      title: 'Home', 
      type: 'sub', 
      children: [
        { path: '/home', title: 'What\'s new?', type: 'link' },
        { path: '/home/details/1', title: 'Need a motivational speaker? I speak for free!', type: 'link' },
        { path: '/home/details/2', title: 'Preparing for a speech? Happy to help!', type: 'link' },
				{ path: '/home/details/3', title: 'About me', type: 'link' }
			],
    },
    {
      title: 'A few speeches',
      type: 'sub', 
      children: [
        { 
	      	path: '/blogs/details/1', title: 'Game Of Life',  type: 'link'
        },
        { 
	      	path: '/blogs/details/2', title: 'Knocks on the door',  type: 'link'
        },
        { 
	      	path: '/blogs/details/3', title: 'Legacy',  type: 'link'
        },
        { 
	      	path: '/blogs/details/4', title: 'Assurances',  type: 'link'
        },
        { 
	      	path: '/blogs/details/5', title: 'Trifecta',  type: 'link'
        }
      ]
    },
    {
      title: '4 Steps to write a meaningful speech',
      type: 'sub',
      children: [
        { title: '01 - Begin with the end in mind', path: '/howtos/details/1', type: 'link' },
        { title: '02 - Look no further...', path: '/howtos/details/2', type: 'link' },
        { title: '03 - There are no terrible drafts', path: '/howtos/details/3', type: 'link' },
        { title: '04 - Done is better than perfect.', path: '/howtos/details/4', type: 'link' }
      ]
    },
    {
      title: '5 Ways to boost your presentation',
      type: 'sub',
      children: [
        { title: '01 - Set your mission', path: '/howtos/details/1', type: 'link' },
        { title: '02 - Get a detailed outline', path: '/howtos/details/2', type: 'link' },
        { title: '03 - Listen to yourself', path: '/howtos/details/3', type: 'link' },
        { title: '04 - Engage your audience', path: '/howtos/details/3', type: 'link' },
        { title: '05 - Throw in some stagecraft', path: '/howtos/details/3', type: 'link' }
      ]
    },
    {
      title: 'Contest Videos',
      type: 'link',
      children: [
        { title: 'Division Contest, Feb 2020', path: '/videos/1', type: 'link'},
        { title: 'Area Contest, Nov 2019', path: '/videos/1', type: 'link'}
      ]
    }
   ]
  
  	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   
}
