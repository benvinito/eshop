import React, { useContext } from 'react'
import './CSS/ShopCatergory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCatergory = (props) => {
    const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-catergory'>
      <img className="shopcatergory-banner" src={props.banner} alt="" />
      <div className="shopcatergory-indexSort">
        <p>
            <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcatergory-sort">
            Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatergory-products">

        {all_product.map((item,i)=>{
            if (props.catergory===item.catergory) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
                return null;
            }
        })}
    
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCatergory