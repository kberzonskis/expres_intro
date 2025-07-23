 

import { PageTemplate } from '../../template/PageTemplate.js';
import {loginForm} from '../../ui/forms/loginForm.js'; 

export class PageLogin extends PageTemplate {
  constructor(req) {
    super(req);
    this.pageType = 'shortPage';
    this.pageJS = 'login'
    this.asideVisible = false; // No aside for registration page
  }
  main() {return  `
     
            ${loginForm()} 
    <a href="/">back home</a>
        `
        
  }
}
















   ;