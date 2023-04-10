 import data from '../data.json'
 import styled from 'styled-components'

export default function Details (){
    return (
            <>
{data.map((item) => (
        <div className = "divstyle"
        key={item.id}>
         <div className='name'>
         <p className='list'> {item.name}</p>
         </div>
          <div>
          <Photo src={item.image} alt='img'/>
          </div>
          <div className='price'>
          <p className='list'>Price: {item.price} $</p>
          </div>
          
        </div>
        ))}
        
        
            </>
    )}

    const Photo = styled.img`
            width: 500px;
            height: 350px;
            margin-left: 25px;
            `