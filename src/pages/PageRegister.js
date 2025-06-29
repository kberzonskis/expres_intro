import { PageTemplate } from '../template/PageTemplate.js';

export class PageRegister extends PageTemplate {
  constructor(req) {
    super(req);
    this.pageType = 'shortPage';
    this.asideVisible = false; // No aside for registration page
  }
  main() {return `<h1>Registracija</h1>
            <form id="registerForm">
                <label for="username">Vartotojo vardas:</label>
                <input type="text" id="username" name="username" required>                  
                <label for="password">Slaptažodis:</label>
                <input type="password" id="password" name="password" required>
                
                <button type="submit">Registruotis</button>
            </form>`
    ;
  }
}