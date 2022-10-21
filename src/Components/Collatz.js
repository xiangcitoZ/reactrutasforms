import React, { Component } from 'react'

export default class Collatz extends Component {
    //1
    cajanumero = React.createRef();


    //2 . METODO PARA PINTAR EL NUMERO , LA e ES NECESARIO PARA FORMULARIOS
    mostrarCollatz = (e) =>{
        e.preventDefault();
        var numero = parseInt(this.cajanumero.current.value);
        console.log(numero);

        //5. HACEMOS EL PUSH, PARA ENSEÑAR LOS NÚMEROS EN EL DIBUJO
        //CON EL BUCLE
        var aux = [];
        while( numero != 1){
            if(numero % 2 == 0){
                //PAR
                numero = numero / 2
            }else{
                numero = numero * 3 +1;
            }
            aux.push(numero);
        }
        //6. LO METEMOS EN SET STATE
        this.setState({
            numeros:aux
        })
    }

    //3. NECESITO UN ARRAY DENTRO DE STATE
    state = {
        numeros : []
    }
  render() {
    return (
      <div align="center">
        <h1>COLLATZ</h1>
        
        <form onSubmit={this.mostrarCollatz}>
            <label>Introduce un número para calcular Collatz</label>
            <input type="number" ref={this.cajanumero}/>
            <br/>
            <button>
                Calcular
            </button>
        </form>
        {/*4. HACER EL BUCLE CON MAP, CON UNA LISTA */}
        <ul>
            {
                this.state.numeros.map((numero,index)=>{
                    return(<li key={index}>{numero}</li>);

                })
            }
        </ul>
      </div>
    )
  }
}
