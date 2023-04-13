import data from '../data.json'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
export default function Menu () {
  
    return (
        <>
<div>
  {data.map((item) => (
      <div className = "divstyle" key={item.id}>
          {/* ID: {item.id} */}
          {/* <p className='list'>Category: {item.category}</p>   */}
        <p className='list1'> {item.status}</p>
        <div className='name'>
          <p className='list'> {item.name}</p>
        </div>
          
          <div>
             <Photo src={item.image} alt='img'/>
          </div>

          <div className='price'>
            <p className='list'>Price: {item.price} $</p>
            <Details1>
              <NavLink to={`/details/${item.id}`}>Details</NavLink>
            </Details1>
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
    )}

 const Photo = styled.img`
 width: 500px;
 height: 350px;
 margin-left: 25px;
 `

 const Details1 = styled.p`
 color: white;
 display: inline-block;
 margin-left: 230px;
 background-color: green;
 border-radius: 5px;
 width: 90px;
 text-align: center;
 font-family: 'Roboto Slab';
 font-size: 20px;
 `
    