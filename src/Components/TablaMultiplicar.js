import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    //1
    cajaMultiplicar = React.createRef();

    //2
    mostrarTabla = (e) =>{
        e.preventDefault();
        var numero = parseInt(this.cajaMultiplicar.current.value);
        console.log(numero);

        //5. HACEMOS LA LÓGICA DE LA TABLA, CON EL PUSH
        var aux = [];
        var resultado = 0
        for(var i = 1; i<=10; i++){
            
            resultado = numero * i;
            console.log(resultado)
            aux.push(i +" x "+ numero +" = "+resultado);
        }
        //6. METER EN SETSTATE PARA DIBUJAR
        this.setState({
            numeros:aux
        })
    }
    
    //3 ARRAY
    state = {
        numeros: []
    }


  render() {
    return (
      <div align = "center"> 
        <h1>TABLA MULTIPLICAR</h1>

        <form onSubmit={this.mostrarTabla} >
            <label>Introduce un número</label>
        
            <input type="number" ref={this.cajaMultiplicar}></input>
            <br/>
            <button>
                Calcular
            </button>
        </form>
        {/* 4.HACER LA LISTA */}
        <ul>
            {
                this.state.numeros.map((numero,index)=>{
                    return(<li key={index}>{numero}</li>)
                })
            }
        </ul>


      </div>
    )
  }
}
