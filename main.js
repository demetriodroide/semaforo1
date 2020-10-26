document.getElementById("pulsar").addEventListener("click", escuchoclickboton); 

function escuchoclickboton() { 
   
let todaslascajas = document.querySelectorAll(".todas");
let cajaverde = document.querySelector(".verde.todas");
        console.log(cajaverde);
        //null == false
        //Elemento == true
        if (cajaverde) {
          //Ponerla en negro y la siguiente en verde

          /*
            i = 2;
            Negro //
            Negro //
            ->Verde //Termina el for sin entrar dentro
            Negro

          */
         console.log("Entra");
          let i = 0;
          while (todaslascajas[i].className === "negro todas")
          {
            i++;
          }
          // for (i = 0; todaslascajas[i].className === "negro todas"; i++ ){}
          console.log(i);
          todaslascajas[i].className = "negro todas";
              // if ( todaslascajas[i + 1] === undefined ) {
              //   i = -1;
              // }
              // todaslascajas[++i].className = "verde todas";
              if ( todaslascajas[i + 1] !== undefined ) {
                todaslascajas[++i].className = "verde todas";
              }
            }
        else {
          //Pintar la primera de verde
          todaslascajas[0].className = "verde todas";
        }




        // if ( todaslascajas.className === "verde" ) {
         
        // for (let i = 0; i < todaslascajas.className === "verde"; i++ ){
        //   todaslascajas[i].className === "todas negro";
        //   todaslascajas[i++].className === "todas verde";
            
        // }

        // }
       
        // else {
        //   todaslascajas[0].className = "todas negro"
        // }
       /*
        let todoslosdiv = document.querySelectorAll("div");
        console.log(todoslosdiv.length);
*/











        /*
                else if (  ){

                }


                */
} /*
    let caja1 = document.getElementById("uno");
    let caja2 = document.querySelector("#dos");
    let caja3 = document.querySelector("#tres");
    
                if ( caja1.className === "negro" && caja2.className === "negro" && caja3.className === "negro" ){
                    document.querySelector("#uno").className = "verde"; 
                  }

                 else if( caja2.className === "negro" && caja3.className === "negro" ){
                  document.querySelector("#uno").className = "negro";
                   document.querySelector("#dos").className = "ambar"; 
                            }

                  else if( caja1.className === "negro" && caja3.className === "negro" ){
                    document.querySelector("#dos").className = "negro"; 
                   document.querySelector("#tres").className = "rojo"; 
                                    }
                      else {
                      document.querySelector("#tres").className = "negro"; 
                           }
*/

