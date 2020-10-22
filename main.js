document.getElementById("pulsar").addEventListener("click", escuchoclickboton); 

function escuchoclickboton() { 

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

}

