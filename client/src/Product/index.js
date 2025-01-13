import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Menu from '../Menu';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Products = () => {

  const [products, setProducts] = useState([]);
  // const [api, setApi] = useState(false);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>{
        let temp = json;
        temp = temp.map((item, index)=>{
          return {...item, fullStar: Math.floor(item.rating.rate), halfStar: Math.floor(item.rating.rate) != item.rating.rate ? 1 : 0, borderStar: 5-Math.ceil(item.rating.rate)}
        })
      setProducts([...temp]);
      console.log("Product in temp value -->",products);
      }); 
  }, [])

  console.log(products);

  return (
    <div>
      <Header />
      <Menu />
      <div className='flex flex-wrap gap-[6rem] justify-center items-end'>
        {products.map((item)=>{
          return(
            <div key={item.id}>
              <img width="200px" height="200px" className='max-h-[200px]'  src={item.image} />
              <div className='w-[200px] text-wrap text-[#2162a1] cursor-pointer hover:underline'>{item.title}</div>
              <div className='text-[#b12704]'>${item.price}</div>
              <div className='flex gap-[4px] justify-center'>
                {[...Array(item.fullStar)].map((star, ind)=>{
                  return(
                    <StarIcon key={ind} sx={{color:'#de7921', width:'15px'}} />
                  )
                })}
                {[...Array(item.halfStar)].map((star, ind)=>{
                  return(
                    <StarHalfIcon key={ind} sx={{color:'#de7921', width:'15px'}} />
                  )
                })}
                {[...Array(item.borderStar)].map((star, ind)=>{
                  return(
                    <StarBorderIcon key={ind} sx={{color:'#de7921', width:'15px'}} />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products