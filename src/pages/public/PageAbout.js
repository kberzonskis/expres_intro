import  {PageTemplate} from '../../template/PageTemplate.js';
export class PageAbout extends PageTemplate  {
    constructor(req)  {
    super(req);
  this.pageHeader ='fullPage'; }

    main() 
    {  const links = ['Home', 'About', 'Register',];
    let linksHTML = ''; 
    for ( const link of links) {
       linksHTML += `<li><a>${link}</a></li>`;
    }
       
    return   ` <h1>SVEIKI DRAUGAI</h1> 
    <p><i class="fa fa-home"></i> Šis yra paprastas tinklapis, be padailinimu</p>

         <ul>${linksHTML}<ul>`
       

    }
}