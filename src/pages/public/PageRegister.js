import { PageTemplate } from '../../template/PageTemplate.js';
import { registerForm } from '../../ui/forms/registerForm.js'

export class PageRegister extends PageTemplate {
  constructor(req) {
    super(req);
    this.pageJS = 'register'
    this.pageType = 'shortPage';
    this.asideVisible = false; // No aside for registration page

  }

  main() {  return  ` 
          ${registerForm()}
          <a href="/">back home</a>
          <a href="/login">Login</a>
                      `

         
          
  }
}