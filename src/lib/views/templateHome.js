
//Funcion que crea el template de la pantalla Inicio
export const home = () => {
  const divHome = document.createElement("div");
  const viewHome =  `<section>
    <section>
      <img src="" alt="">
    </section>
    <article>
      <p>
        Únete a la comunidad y 
        conoce todos los secretos
        para vivir sol@ antes de los 30
        
      </p>
    </article>
    <section>
    <button>
      INICIAR SESIÓN
    </button>
    <p>
      ¿No tienes cuenta aún? Regístrate <a href="">aquí.</a>  
    </p>
    </section>
  </section>`
  divHome.innerHTML = viewHome;
  return divHome;

}
