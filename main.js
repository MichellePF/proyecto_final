let bencina;
let kilometros;
let distancia;

class Vehiculo {
    constructor(kms, kmsXlitro){
       this.kms = kms;
       this.kmsXlitro = kmsXlitro;
    }
    consumo(){
        console.log(`La distancia es ${this.kms} kms y se gastara ${this.kmsXlitro} litros de bencina`);
        
         
    }
}

class Suzuki extends Vehiculo{

    consumoTotal(){
        return this.kms/this.kmsXlitro;
           
    }
}

class Mazda extends Vehiculo{
    consumoTotal(){
        return this.kms/this.kmsXlitro;
               
    }
}

class Haval extends Vehiculo{
    consumoTotal(){
        return this.kms/this.kmsXlitro;
        
        
    }
}

class Renault extends Vehiculo{

    consumoTotal(){
    
        return this.kms/this.kmsXlitro;
        // console.log(bencina);
        
    }
}



let btn = document.getElementById('btn-calcular').addEventListener('click', function(){

    
    let origen = document.getElementById('origen').value;
    let destino = document.getElementById('destino').value;
    let vehiculo = document.getElementById('vehiculo').value;

    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origen}&destinations=${destino}&key=AIzaSyAlDSRLGoUqLzoFZQlR7wvyRoNdsufoQls`, {})
        .then(function(datos){
        return datos.json();
        })
        .then(function(datos_json){
            
            if(origen == "" || destino == "" || vehiculo == ""){
                alert('Debes seleccionar una opción');
                return;
            }

            let distancia = datos_json.rows[0].elements[0].distance.value;
            let kilometros = Math.round(distancia / 1000);                      
       
            let distanciaTotal = document.getElementById("distancia").innerHTML = `Distancia total: <b> ${kilometros} kms </b>`;  
            
           
        
            if(vehiculo == 'suzuki'){
                let suzuki = new Suzuki(kilometros, 19.9);
                document.getElementById("bencinaTotal").innerHTML = `Bencina requerida: <b> ${Math.round(suzuki.consumoTotal())} litros</b>`; 
                
            } else if (vehiculo == 'mazda'){
                let mazda = new Mazda(kilometros, 18);
                document.getElementById("bencinaTotal").innerHTML = `Bencina requerida: <b> ${Math.round(mazda.consumoTotal())}  litros</b>`;
        
            }else if(vehiculo == 'haval'){
                let haval = new Haval(kilometros, 12.6);
                document.getElementById("bencinaTotal").innerHTML =  `Bencina requerida: <b> ${Math.round(haval.consumoTotal())}  litros</b>`; 
        
            }else {
                let renault = new Renault(kilometros, 27.6);
                document.getElementById("bencinaTotal").innerHTML =  `Bencina requerida: <b> ${Math.round(renault.consumoTotal())}  litros</b>`; 
           
            }

        })

        .catch(function(error) {
            alert(`Error: ${error}`);
        });
   
});