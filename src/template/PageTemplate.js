export class PageTemplate { 
    constructor(req) {
        this.req = req;
        this.asideVisible = true;
        this.pageType = 'fullPage';
        this.pageJS = '';} 

head() { return ` <head>
   
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">


     <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/vendor/font-awesome.min.css">
</head> `} ; 
    
   


    main () { return 'Content....'}
  
   aSide() { return `<p>Šis yra paprastas Soninis meniu</p>`; }
    
    header() {
             return `<header>
     
        <nav>
        
            <ul>
                <img class="logo" src="/img/foto14.jpg" alt="logo" />
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
                <img class="logo" src="/img/foto14.jpg" alt="logo" />

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

