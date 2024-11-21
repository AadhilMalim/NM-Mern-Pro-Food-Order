import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import PopularRestaurants from '../components/PopularRestaurants'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        fetchRestaurants();
      }, [])

    const fetchRestaurants = async() =>{
        await axios.get('http://localhost:6001/fetch-restaurants').then(
          (response)=>{
            setRestaurants(response.data);
          }
        )
      }

  return (
    <div className="HomePage">

      <div className="home-categories-container">

        <div className="home-category-card" onClick={()=>navigate('/category/Breakfast')}>
          {/* {<img src="https://www.lacademie.com/wp-content/uploads/2022/03/indian-breakfast-recipes-500x500.jpg" alt="" />} */}
          <img src="https://1.bp.blogspot.com/_IJ1GU-FRaYI/TGZGAXq7ZrI/AAAAAAAAAr0/AY-5CAOlFBs/s1600/continental+breakfast.jpg" alt="" />
          <h5>Breakfast</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Biriyani')}>
          {/* (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-VXaTJIkc6rk02DU8r7r9zR-KaeWvH1oKA&usqp=CAU" alt="" />) */}
          <img src="https://th.bing.com/th/id/OIP.Q4f5lR46RdwAqe9hXJ7dlAHaF7?rs=1&pid=ImgDetMain" alt="" />
          <h5>Biriyani</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Pizza')}>
          {/* (<img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />) */}
          <img src="https://th.bing.com/th/id/R.a90f420ad8c71c3aacf28f87de3f1708?rik=A5WC8v2va1qFGg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-n-jZjyEzncE%2fUq8IxN6-giI%2fAAAAAAAADWk%2fOL-YhSPEG_4%2fs1600%2fPizza%2bFood%2bHd%2bWallpaper.jpg&ehk=P%2f8NwSvvwjLvNExGqNkmVRip5lATlUieTUwxOT6m2D0%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <h5>Pizza</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Noodles')}>
          {/* {<img src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2176816723.jpg" alt="" />} */}
          <img src="https://www.ruchiskitchen.com/wp-content/uploads/2015/05/noodles_food_2.jpg" alt="" />
          <h5>Noodles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Burger')}>
          {/* {<img src="https://www.bluecirclefoods.com/cdn/shop/products/Blue_Circle_Salmon_Organic_Burger_1000x.jpg?v=1692122703" alt="" />} */}
          <img src="https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg" alt="" />
          <h5>Burger</h5>
        </div>

      </div>


      <PopularRestaurants />

      


      <div className="restaurants-container">
        <div className="restaurants-body">
            <h3>All restaurants</h3>
            <div className="restaurants">

                {restaurants.map((restaurant) =>(

                  <div className='restaurant-item' key={restaurant._id}>
                      <div className="restaurant" onClick={()=> navigate(`/restaurant/${restaurant._id}`)}>
                          <img src={restaurant.mainImg} alt="" />
                          <div className="restaurant-data">
                              <h6>{restaurant.title}</h6>
                              <p>{restaurant.address}</p>
                          </div>
                      </div>
                  </div>
                ))}

 
            </div>
        </div>
    </div>





      <Footer />
    </div>
  )
}

export default Home