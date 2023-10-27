import Button from "./react"
import './react.css'

type Props={ 
Title: string,
info: string,
pic:string,
}
const MyCard= ({Title,info,pic}:Props)=>{

    return (
        <div className="card-content">
            <img className='container-pic' src={pic} alt="img" />
        <h2 className='Geysir-text'>
         {Title}
            </h2>
        <p className='My-text'>
           {info}
            </p>
        <Button/>
    </div>
    )
}
export default MyCard