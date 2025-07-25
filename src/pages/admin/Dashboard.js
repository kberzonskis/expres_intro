import { AdminTemplate} from "../../template/AdminTemplate.js";
import { COOKIE_MAX_AGE } from "../../env.js";
import { loginForm } from "../../ui/forms/loginForm.js";


export class PageDashboard extends AdminTemplate {  
 



constructor(req) {
    super(req);
   
    this.pageType = '';
    this.asideVisible = false; 
    this.pageHeader ='';
    
    


  }

  main() {  
    if (!this.req.user.isLoggedIn) { 

        return `
        <p>403- reikia prisijungti</p>
          <a href="/">back home</a>
        `
    }



        const cookie = this.req.user.login_token_created_at.getTime();
        const secondsLeft = Math.floor(COOKIE_MAX_AGE - (Date.now() - cookie) / 1000);
        const seconds = secondsLeft % 60;
        const minutes = (secondsLeft - seconds) / 60;

    return  `
  
    <h1>WLCOME TO DASHBOARD!!!</h1>
    
    <p class="dash1">USERNAME : ${this.req.user.username}</p>
    <p class="display-6">Likęs sesijos laikas: ${minutes}:${seconds}</p>`

  }}



