import React from 'react'
import Header from '../Header'
import Menu from '../Menu'


const Home = () => {

  const categories = [
    {
      title:'Fashion Trends',
      img: '../../assets/pexels-gabi-brasiliano-515209300-30010312.jpg'
    },
    {
      title:'Latest Gadgets',
      img: '../../assets/pexels-garrettmorrow-682933.jpg'
    },
    {
      title:'Makeup',
      img: '../../assets/pexels-jhong-pascua-1062908-3018845.jpg'
    },
    {
      title:'Decorate Your Home',
      img: '../../assets/pexels-kamo11235-667838.jpg'
    },
    {
      title:'Innovations from Everywhere',
      img: '../../assets/pexels-thisisengineering-3861458.jpg'
    },
    {
      title:'Household Goods',
      img: '../../assets/pexels-anntarazevich-7771985.jpg'
    },
  ]

  return (
    <div className='min-w-[1100px]'>
      <Header />
      <Menu />
      <div className='w-[100%] flex justify-center px-[2rem] pt-[2rem]'>
        <div className='w-[100%] flex flex-wrap gap-[2rem] justify-between'>
          {categories.map((item)=>{
            return(
              <div>
                <div className='font-semibold text-[18px] mb-[10px]'>{item.title}</div>
                <img className="w-[20rem] h-[20rem]" src={item.img} alt="category" />
              </div>
            )
          })}
            <div className='grow'></div>
          </div>
      </div>
    </div>
  )
}

export default Home