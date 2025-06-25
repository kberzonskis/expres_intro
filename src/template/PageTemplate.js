export class PageTemplate { 
    constructor() {} 

    head() { return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head> `} ; 


    main () { return 'Content....'}
  

    header() {

        

         return `<header>
     
        <nav>
            <ul>
                <img src="/src/img/foto14.jpg" alt="logo" />
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
            </ul>
        </nav>
    </header>`;} 

    footer() {  return `<footer>
        <p>© 2025 My Website</p>
        <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
    </footer>` ;} 
  
     
    render() 
    
    
{  return  `<!DOCTYPE html>
<html lang="en">
${this.head()}
<body>
${this.header()}


<main>
 ${this.main()}

</main>
    
${this.footer()}


</body>

</html> `;
}


} 

