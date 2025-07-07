 

import { PageTemplate } from '../template/PageTemplate.js';
import {loginForm} from '../Forms/loginForm.js'

export class PageLogin extends PageTemplate {
  constructor(req) {
    super(req);
    this.pageType = 'shortPage';
    this.pageJS = 'login'
    this.asideVisible = false; // No aside for registration page
  }
  main() {return  `main
    
            ${loginForm()} 
    
        `
  }
}
















   ;