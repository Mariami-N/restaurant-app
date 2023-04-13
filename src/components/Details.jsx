import data from '../data.json'
 import styled from 'styled-components'
import { useParams } from 'react-router-dom';


export default function Details ({data}){
        const { id } = useParams();
        const selectedItem = data.find((item) => item.id === id);
    return (
            <>
        <div className='divstyle'>
                <h1>{selectedItem?.name}</h1>
                <img src={selectedItem?.image} alt="item" />
                <p>Price: {selectedItem?.price} $</p>
                <p>Description: {selectedItem?.description}</p>
        </div>
            </>
    )}

    const Photo = styled.img`
            width: 500px;
            height: 350px;
            margin-left: 25px;
            `


        //     {data((item) => (
        //         <div className = "divstyle"
        //         key={item.id}>
        //          <div className='name'>
        //          <p className='list'> {item.name}</p>
        //          </div>
        //           <div>
        //           <Photo src={item.image} alt='img'/>
        //           </div>
        //           <div className='price'>
        //           <p className='list'>Price: {item.price} $</p>
        //           </div>
        //            <p className='list'>Category: {item.category}</p>  
        //            <p className='list'>description: {item.description}</p>
        //         </div>
                 
        //         ))}
        //         // 