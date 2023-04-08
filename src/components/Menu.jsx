import data from '../data.json'
import styled from 'styled-components'

export default function Menu () {
  
    return (
        <>
        <div>
      {data.map((item) => (
        
        <div className = "divstyle"
        key={item.id}>
          {/* ID: {item.id} */}
          {/* <p className='list'>Category: {item.category}</p>   */}
          {/* <p className='list'>Status: {item.status}</p> */}
         <div className='name'>
         <p className='list'> {item.name}</p>
         </div>
          
          <div>
          <Photo src={item.image} alt='img'/>
          </div>
          <div className='price'>
          <p className='list'>Price: {item.price} $</p>
          </div>
          
         
          
          {/* <div style={{
            width: "500px"
          }}>
          <p className='list'>description: {item.description}</p>
          </div> */}
          
          
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

 `
    