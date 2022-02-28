import {React,Component} from "react";
import Shop_data from './shop.data';
import Preview from'../../components/preview-collection/preview.component.jsx'

class ShopPage extends Component{
constructor(props){
 super(props);
 this.state={

  collections:Shop_data
 }
}


render(){
 const {collections}=this.state;
 return(
  
 <div className="shop-page">
  
{
 collections.map(({id,...otherCollectionProps})=>(
  <Preview key={id}{...otherCollectionProps}/>
 ))
}


  </div>
 )
}


}
export default ShopPage;