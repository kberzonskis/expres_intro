export function registerForm() 

{  return  ` 
      <form>
          <div>
            
            <div>
                <label for="username">Vartotojo vardas:</label>
                <input type="text" id="username" name="username" required>                  
            </div>
               
            <div>
                <label for="password">Slaptažodis:</label>
                <input type="password" id="password" name="password" required>
           </div>  
                 <label for="email">Email</label>
                <input id="email" type="email" required>
             </div>
                              
                <button type="submit">Registruotis</button>
                     
      
      </form>
    
    `       
} 

  /*<div>
              
            </div> */