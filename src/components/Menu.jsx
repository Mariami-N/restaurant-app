import data from '../data.json'
import styled from 'styled-components'

export default function Menu () {
  
    return (
        <>
        <div style={{
          backgroundColor: "yellow"
        }}>
      {data.map((item) => (
        
        <div className = "divstyle"
        key={item.id}>
          {/* ID: {item.id} */}
          <p className='list'>Category: {item.category}</p>  
          <p className='list'>Status: {item.status}</p>
         
          <p className='list'>Name: {item.name}</p>
          <div>
          <Photo src={item.image} alt='img'/>
          </div>
          
          <p className='list'>Price: {item.price} $</p>
         
          
          <div style={{
            width: "500px"
          }}>
          <p className='list'>description: {item.description}</p>
          </div>
          
          
        </div>
        
      ))}
    </div>
        </>
    )
    
    
    }

 const Photo = styled.img`
 width: 500px;
 height: 350px;
 margin-left: 25px;
 margin-top: 25px;

 `
    