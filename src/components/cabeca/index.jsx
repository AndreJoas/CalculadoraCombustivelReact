import './index.css';
import logo from '../../imagens/foto-0.png';
// componente do header
 
function Cabeca() {
    return(
        <div className='divimagem' style={{display:'flex', justifyContent:"center",flexDirection:"column", alignItems:"center", maxWidth:"100%"}}>
            <div style={{maxWidth:"100%",display:'flex', justifyContent:"center",flexDirection:"column", alignItems:"center"}}><img src={logo}  alt="nao encontrado" style={{width:"300px", height:"250px"}}/></div>
            <p style={{color:"#fff", marginTop:"-1rem", textAlign:"center"}}>Você sabe qual combustivel compensa mais abastecer seu carro?</p>
            <p style={{color:"#fff"}}>Utilize a calculadora abaixo:</p>
        </div>
        
    )
}

export default Cabeca;
