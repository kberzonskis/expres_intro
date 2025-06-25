export class PageTemplate { 
    constructor() {
        this.asideVisible = true; // By default, the aside is visibl
        this.pageType = 'fullPage';
        this.pageJS = '';} // Default to no specific JS file} 

head() { return ` <head>
   
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/public/favicon/favicon.ico">

</head> `} ; 
    
   


    main () { return 'Content....'}
  
   aSide() { return `<p>Šis yra paprastas Soninis meniu</p>`; }
    
    header() {
             return `<header>
     
        <nav>
            <ul>
                <img src="/src/img/foto14.jpg" alt="logo" />
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>

            </ul>
        </nav>
    </header>`;} 

  headerAuth() {
             return `<header>
     
        <nav>
            <ul>
                <img src="/src/img/foto14.jpg" alt="logo" />
                
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </ul>
        </nav>
    </header>`;} 


    script() { if (this.pageJS ==='') { return ''; }
        
        return `<script src="/js/main.js" type = "module" </script>`; }



    footer() {  return `<footer>
        <p>© 2025 My Website</p>
        <ul>
       
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
          
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
            </footer>` ;} 


    footerAuth() {  return `<footer>
        <p>© 2025 My Website</p>
        
    </footer>` ;} 


  
     
    render() 
    
    
{  return  `<!DOCTYPE html>
<html lang="en">
${this.head()}
<body>
${this.pageType === 'fullPage' ?  this.header() : this.headerAuth() }
   
${this.asideVisible ? this.aSide () : ''}
<main>
 ${this.main()}

</main>
    
${this.pageType === 'fullPage' ? this.footer() : this.footerAuth() }
${this.script()}
</body>

</html> `;
}


} 

