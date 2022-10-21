import React, { Component } from 'react'

export default class TablaMultiplicarV2 extends Component {
    //1
    selectnumero = React.createRef();

    //2
    mostrarTabla = (e) =>{
        e.preventDefault();
        var numero = parseInt(this.selectnumero.current.value);
        console.log(numero);

        //5. HACEMOS LA LÓGICA DE LA TABLA, CON EL PUSH
        //CREO UN ARRAY AUXILIAR aux
        var aux = [];
        var resultado = 0
        for(var i = 1; i<=10; i++){
            
            resultado = numero * i;
            
            aux.push(i +" x "+ numero +" = "+resultado);
        }
        //6. METER EN SETSTATE PARA DIBUJAR
        this.setState({
            numeros:aux
        })
    }
    
    //3 ARRAY
    state = {
        numeros: [],
        options : []
    }
    //HACEMOS EL SELECT
    //AL NO ESTAR RELACIONADO EN EL FORMULARIO, SE HACE FUERA DE FORM
    generarOptions = () =>{
        var datos = [];
        for (var i = 1; i<= 5; i++){
            var random = parseInt(Math.random() *100) +1;
            datos.push(<option>{random}</option>);
        }

        //NO SE UTILIZA EL STATE, PORQUE AL GENERAR LOS NUMEROS ALEATORIAS AL INICIO
        //SE CAMBIA SIEMPRE, POR ESO ES MEJOR RETURN
          return  datos;
        
    }

  render() {
    return (
      <div align = "center"> 
        <h1>TABLA MULTIPLICAR VERSION 2</h1>
        
        <form onSubmit={this.mostrarTabla} >
            <label>Seleccione un número</label>
            <select  ref={this.selectnumero}>
               {this.generarOptions()}
            </select>
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
