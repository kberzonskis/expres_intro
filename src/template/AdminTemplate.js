

export class AdminTemplate {
constructor(req) {
this.req = req;
this.asideVisible = true;
this.pageType = 'fullPage';
this.pageJS = '';
}

head() { return `

<head>

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
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/vendor/font-awesome.css">
    <link rel="stylesheet" href="/css/vendor/font-awesome.min.css">
    <link rel="stylesheet" href="/css/bootstrap.css">
    
    
</head> `} ;

async main () { return 'Content....'}


header() {
return `<header>
    <img class="logo" src="/img/foto14.jpg" alt="logo" />
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        ${this.userMeniu()}

    </nav>
</header>`;}

headerAuth() {
return `<header>
    
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/login">Login</a>

</header>`;}

userMeniu() {
return `<nav>
    <a href="/register">Register</a>
    <a href="/login">Login</a>
</nav>`

}





script() { if (!this.pageJS) { return ''; }

return `<script src='/js/${this.pageJS}.js' type="module"></script>`; }

footer() { return `<footer>

    <ul>

        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
    </ul>

    <a>
        <li><i class="fa fa-facebook"></i>facebook</li>
        <li><i class="fa fa-twitter"></i>Twiter</li>
        <li><i class="fa fa-instagram"></i>Instagram</li>
    </a>



    <p>© 2025 My Website</p>
   
</footer>` ;}

footerAuth() { return `<footer>




    <p>© 2025 My Website</p>
    
 


</footer>` ;}

render()
   
{


 return `
<html lang="en">
${this.head()}



<body class="bodyDash">


    ${this.pageHeader === 'fullPage' ? this.header() : this.headerAuth() }

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