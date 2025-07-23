import { NODE_ENV } from  "../../env.js";

export function loginForm()  {

let email = '';
let password = '';

if (NODE_ENV === 'dev') {

email = 'pirmas';
password = 'pirmas@pirmas.lt';

}
   return `    <form>
                   
                <div>
                        <label for="username">Username</label>
                        <input value="${email}" id="username" type="text"  required>
                    </div>
                   
                    <div>
                        <label for="password" class="form-label">Password</label>
                        <input value="${password}" id="password" type="password" required>
                    </div>
                   
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
        `
  }



