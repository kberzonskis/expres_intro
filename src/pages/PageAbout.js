import  {PageTemplate} from '../template/PageTemplate.js';
export class PageAbout extends PageTemplate  {
    constructor(req)  {
    super(req); }

    main() 
    {  const links = ['Home', 'About', 'Register'];
    let linksHTML = ''; 
    for ( const link of links) {
       linksHTML += `<li><a>${link}</a></li>`;
    }
       
    return   ` <h1>SVEIKI DRAUGAI</h1> 
    <p>Šis yra paprastas ABOUT.</p>
   
         <ul>${linksHTML}<ul>`
       

    }
}