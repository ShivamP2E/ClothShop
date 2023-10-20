import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import '../Pages/Style/ShopCategory.css'




const ShopCategory = (props) => {
  // using this we are providing the all_products data to shop category through which we can filter out data b/w men and womoen and kids .

  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
       {/* HTML structure for  */}
       <img  classNam='shopcategory-banner' src={props.banner} alt=''/>
       <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
       </div>
       <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
         </div>
         <div className='shopcategory-loadmore'>
          Explore More
         </div>
    </div>
  )
}

export default ShopCategory