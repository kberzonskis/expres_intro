export function loginForm ()  

{ 
   return `    <form>
                   
                <div>
                        <label for="username_or_email" >Username or Email</label>
                        <input id="username_or_email" type="text"  required>
                    </div>
                   
                    <div>
                        <label for="password" class="form-label">Password</label>
                        <input id="password" type="password" required>
                    </div>
                   
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
        `
  }



