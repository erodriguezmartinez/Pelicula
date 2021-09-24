//Esperanza Rodríguez Martínez
'use strict'

//console.log("JS Cargado")

class Pelicula{ //Definimos clase película
  constructor(){
    //console.log('Se ha creado una película')
    //this es el objeto que ejecuta el código
    this.titulo = 'Tiroteo en Mississippi'
    this.pueblo = new Pueblo('TodoPolvo','muy polvoriento, en mitad del desierto de Arizona')
    this.narrador = new Narrador()
    this.paco = new PersonajesBueno('Paco','revolver',6)
    this.maria = new PersonajesBueno('Maria','revolver',6)
    this.morgan = new PersonajesMalo('Morgan','escopeta',4)
    this.acto = new Acto()
    this.disparar = new Disparar()
    this.recargar = new Recargar()
    this.dado = new Dado()
    this.dolor = new Dolor()

    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}</p>`)
    this.narrador.hablar('Era una soleada mañana')
    document.write('<img src="gifs/paco.gif"></img>')
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un día esplendido.`)
    this.maria.hablar(`Hola ${this.paco.nombre} la verdad es que sí.`)
    this.narrador.hablar(`Ambos se miraron un instante y siguieron su camino...`)
    this.morgan.hablar('Vaya pueblo más...polvoriento.')
    document.write('<img src="gifs/morgan.gif"></img>')
    this.morgan.hablar(`¡Eh tú! ¡Pringado! Dame tu caballo y la cartera.`)
    this.narrador.hablar(`Ha llegado Morgan, un temible malvado de ${this.pueblo.nombre}.`)
    this.paco.hablar(`¡¿Como que te de mi caballo?! Es mío, no tendría porque hacerlo.`)
    this.narrador.hablar(`${this.maria.nombre} los mira asustada y el ambiente empieza a tensarse.`)
    this.narrador.hablar(`${this.morgan.nombre} está muy enfadado e insiste.`)
    this.morgan.hablar('¡Que me lo dés te he dicho!')
    this.maria.hablar(`${this.paco.nombre} creo que deverias hacerlo.`)
    this.paco.hablar('¡No!, no le daré nada.')
    this.narrador.hablar(`${this.morgan.nombre} le desafia con la mirada agarrando con fuerza su ${this.morgan.arma}.`)
    this.narrador.hablar(`${this.paco.nombre} saca su ${this.paco.arma}.`)
    //EMPIEZA EL TIROTEO
    this.acto.hablar('EMPIEZA EL TIROTEO')
    this.disparar.disparar()
    this.morgan.municion=this.disparar.municion(`${this.morgan.municion}`)
    this.acto.hablar(`${this.morgan.nombre} dispara a ${this.paco.nombre} con su ${this.morgan.arma}.`)
    this.narrador.hablar(`Tras el disparo fallido de ${this.morgan.nombre}, todos corren a cubrirse`)
    this.narrador.hablar(`${this.paco.nombre} y ${this.maria.nombre} se cubren con el muro del pequeño bar, ${this.morgan.nombre} con un carro de caballos`)
    this.disparar.disparar()
    this.disparar.disparar()
    this.paco.municion=this.disparar.municion(`${this.paco.municion}`)
    this.maria.municion=this.disparar.municion(`${this.maria.municion}`)
    this.acto.hablar(`${this.paco.nombre} y ${this.maria.nombre}, le devuelven los disparos.`)
    this.maria.hablar(`¿Cómo salimos de esta ${this.paco.nombre}?, tenemos que hacer algo.`)
    this.paco.hablar(`Tendrá que ser rápido ${this.maria.nombre} no llevo encima muchas balas`)
    this.disparar.disparar()
    this.morgan.municion=this.disparar.municion(`${this.morgan.municion}`)
    this.acto.hablar(`${this.morgan.nombre} responde quedandose con ${this.morgan.municion} bala en su cargador.`)
    this.morgan.hablar(`Estos pringados no me lo pondrán fácil, debo acercarme más para alcazarlos`)
    this.narrador.hablar(`${this.morgan.nombre} corre para acercarse y cubrise con la parte delantera del bar`)
    this.disparar.disparar()
    this.disparar.disparar()
    this.disparar.disparar()
    this.paco.municion=this.disparar.municion(`${this.paco.municion}`)
    this.paco.municion=this.disparar.municion(`${this.paco.municion}`)
    this.maria.municion=this.disparar.municion(`${this.maria.municion}`)
    this.acto.hablar(`${this.paco.nombre} y ${this.maria.nombre} continúan disparando.`)
    this.disparar.disparar()
    this.morgan.municion=this.disparar.municion(`${this.morgan.municion}`)
    this.acto.hablar(`${this.morgan.nombre} sigue respondiendo con balas.`)
    this.paco.hablar(`¿ Cuantas balas te quedan ${this.maria.nombre} ?`)
    this.maria.hablar(`Me quedan ${this.maria.municion} en el cargador, ¿Cuantas te quedan a tí ${this.paco.nombre}?`)
    this.paco.hablar(`A mí me quedan ${this.paco.municion} en el cargador y no tengo más balas.`)
    this.maria.hablar(`Yo tengo dos más en el bolsillo.`)
    this.paco.hablar(`Tenemos que emplearlas bien.`)
    this.disparar.disparar()
    this.morgan.municion=this.disparar.municion(`${this.morgan.municion}`)
    this.acto.hablar(`${this.morgan.nombre} sigue respondiendo con balas,agotando su cargador.`)
    this.narrador.hablar(`${this.paco.nombre} y ${this.maria.nombre} se encuentran desesperados por hacer algo.`)
    this.paco.hablar(`Podríamos tratar de entrar en la casa por la puerta trasera y así pillarlo desprevenido.`)
    this.maria.hablar('Me parece buena idea.')
    this.morgan.municion=this.disparar.municion(`${this.morgan.municion}`)
    this.acto.hablar(`${this.morgan.nombre} trata de disparar y ${this.morgan.municion}.`)
    this.morgan.hablar('Se me acabaron las balas, tendré que recargar')
    this.disparar.disparar()
    this.disparar.disparar()
    this.disparar.disparar()
    this.paco.municion=this.disparar.municion(`${this.paco.municion}`)
    this.maria.municion=this.disparar.municion(`${this.maria.municion}`)
    this.maria.municion=this.disparar.municion(`${this.maria.municion}`)
    this.acto.hablar(`${this.paco.nombre} y ${this.maria.nombre} aprobechan y contratacan con más balas al oir el click.`)
    this.morgan.municion=this.recargar.recargar(`${this.morgan.nombre}`,`${this.morgan.municion}`)
    this.narrador.hablar(`${this.morgan.nombre} utiliza el único cargador de sobra y vuelve a tener ${this.morgan.municion} balas.`)
    this.narrador.hablar(`${this.paco.nombre} y ${this.maria.nombre} se empiezan a quedar sin balas en sus cargadores.`)
    this.narrador.hablar(` A ${this.paco.nombre} solo le quedan ${this.paco.municion} y a ${this.maria.nombre} le quedan ${this.maria.municion} .`)
    this.maria.hablar(`De acuerdo ${this.paco.nombre},corre aprobechemos que se le escucha recargar.`)
    this.disparar.disparar()
    this.disparar.disparar()
    this.maria.municion=this.disparar.municion(`${this.maria.municion}`)
    this.maria.municion=this.disparar.municion(`${this.maria.municion}`)
    this.acto.hablar(`${this.maria.nombre} realiza unos disparos de distración para acto seguido salir corriendo hacia la puerta.`)
    this.narrador.hablar(`${this.paco.nombre} y ${this.maria.nombre} correr hacia la puerta trasera y se adentran en el bar.`)
    this.disparar.disparar()
    this.morgan.municion=this.disparar.municion(`${this.morgan.municion}`)
    this.acto.hablar(`${this.morgan.nombre} responde a sus balas.`)
    this.narrador.hablar(`${this.paco.nombre} y ${this.maria.nombre} entran en el bar desolado.`)
    this.narrador.hablar(`Al entrar ${this.paco.nombre} y se tropieza y cae al suelo haciendo que su ${this.paco.arma} se aleje.`)
    this.narrador.hablar(`La caida de ${this.paco.nombre} alerta a ${this.morgan.nombre}.`)
    this.paco.hablar('Ahhhh.')
    this.narrador.hablar(`${this.morgan.nombre} rodea el  bar para entrar por la puerta trasera y pillarlos por la espalda.`)
    this.narrador.hablar(`${this.morgan.nombre} entra demasiado rápido enfurecido apuntando a ${this.paco.nombre}, sin darse cuenta de que tiene a ${this.maria.nombre} detrás apuntandole.`)
    this.maria.municion=this.disparar.municion(`${this.maria.municion}`)
    this.acto.hablar(`${this.maria.nombre} trata de disparar por la espalda a ${this.morgan.nombre} y ${this.maria.municion}.`)
    this.maria.hablar('Ohhh noo.')
    this.narrador.hablar(`${this.morgan.nombre} se guira apuntandola y la mira.`)
    this.morgan.hablar('¡JAJAJA!, serás pringada.')
    this.narrador.hablar(`${this.paco.nombre} intenta alcanzar su ${this.paco.arma}.`)
    this.narrador.hablar(`${this.morgan.nombre} se guira para detenerlo.`)
    this.acto.hablar(`En la distración de ${this.morgan.nombre},${this.maria.nombre} trata de recargar.`)

    //FINAL AZAR
    let azarfin=this.dado.dado()

    if (azarfin==0) {
      this.maria.municion=this.recargar.recargar(`${this.maria.nombre}`,`${this.maria.municion}`)
      this.narrador.hablar(`${this.maria.nombre} consigue sacar una bala de su bolsillo y recargar su ${this.maria.arma}.`)
      this.disparar.disparar()
      this.maria.municion=this.disparar.municion(`${this.maria.municion}`)
      this.acto.hablar(`Rápidamento ${this.maria.nombre} dispara a la pierna de ${this.morgan.nombre}.`)
      document.write('<img src="gifs/maria.gif"></img>')
      //AZAR DE DOLOR
      let azardolor=this.dado.dado()
      if(azardolor==0){
          this.dolor.dolor()
      }
      this.narrador.hablar(`${this.morgan.nombre} se encuentra retorciendose de dolor en el suelo.`)
      this.narrador.hablar(`${this.maria.nombre} ayuda a ${this.paco.nombre} a levantarse y los dos huyen.`)
    } else {
      this.narrador.hablar(`${this.morgan.nombre} empuja a ${this.paco.nombre} y se gira rápidamente.`)
      this.narrador.hablar(`${this.maria.nombre} no consigue recargar.`)
      this.disparar.disparar()
      this.morgan.municion=this.disparar.municion(`${this.morgan.municion}`)
      this.acto.hablar(` ${this.morgan.nombre} dispara a ${this.maria.nombre}.`)
      //AZAR DE DOLOR
      let azardolor=this.dado.dado()
      if(azardolor==0){
          this.dolor.dolor()
      }
      this.paco.hablar('¡NOOOO!')
      this.narrador.hablar(`${this.maria.nombre} se encuentra retorciendose de dolor en el suelo.`)
      this.narrador.hablar(`${this.paco.nombre} correo ha ayudar a ${this.maria.nombre}.`)
      this.narrador.hablar(`${this.morgan.nombre} aprobecha para salir corriendo y huir cabalgando el caballo de ${this.paco.nombre}.`)
      document.write('<img src="gifs/vaquero_caballo.gif"></img>')
    }
    document.write(`<h2>FIN</h2>`)
  }


}

class Pueblo{
  constructor(nombre, descripcion){
    this.nombre = nombre
    this.descripcion = descripcion
  }
}

class Narrador{
  hablar(texto){
    document.write(`<p>-${texto}</p>`)
  }
}

class Personajes{
  constructor(nombre,arma,municion){
    this.nombre = nombre
    this.arma = arma
    this.municion = municion
    this.disparar = new Disparar()
  }
}
class PersonajesBueno extends Personajes{
  hablar(texto){
      document.write(`<p class="bueno"><span>${this.nombre}:</span> ${texto}</p>`)
  }
}
class PersonajesMalo extends Personajes{
  hablar(texto){
      document.write(`<p class="malo"><span>${this.nombre}:</span>GRRRR... ${texto}</p>`)
  }
}

class Acto{
  hablar(texto){
    document.write(`<p class="negrita">${texto}</p>`)
  }
}

class Disparar{
  disparar(){
      document.write('<p id="disparo">¡¡PUM!!</p>')
  }

  municion(municion){

      if(municion==0){
        municion='<span id="click">¡¡CLICK!!</span>'
      }else{
        municion=municion-1
      }

      return municion
  }
}

class Dado{
  dado(){
    let dado= Math.round(Math.random()*(6 - 1) + 1) //Generar aleatorio
    if (dado%2==0) {
      return 0;
    } else {
      return 1;
    }
  }
}

class Dolor{
  dolor(){
      document.write('<p id="dolor">¡¡AY!!</p>')
  }
}

class Recargar{

  recargar(nombre,municion){
    if(nombre == 'Morgan'){
        municion=3
    }else{
      municion=1
    }

    return municion
  }
}

new Pelicula()  //Instacio objeto película, se llama al constructior
