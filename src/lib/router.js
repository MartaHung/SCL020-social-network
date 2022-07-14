import { menuLogin } from './views/templateMenu.js';
import { feed } from './views/templateFeed.js'


export const showTemplate = (hash) => {
   const containerRoot = document.getElementById('root');
   containerRoot.innerHTML = " "
   switch (hash){
      case '#/menuLogin':
            containerRoot.appendChild(menuLogin());
            break;  
      case '#/feed':
               containerRoot.appendChild(feed());
            break;

      default:
         containerRoot.appendChild`<h2> Error (╯°□°）╯︵ ┻━┻ </h2>`
   };
};

//Enrutador
export const changeRoutes = (hash) => {
   if (hash === '#/'){
      return showTemplate(hash);
   } else if (hash === '#/menuLogin'){
      return showTemplate(hash);
   } else if (hash === '#/feed'){
      return showTemplate(hash);
   } else {
      return showTemplate(hash);
   }
}







