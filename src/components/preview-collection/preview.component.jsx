 import React from "react";
 import CollectionItem from '../collection-item/collection-item.component';
 import './preview.styles.scss';

 const Preview=({title,items,})=>(
   
  <div className="collection">
   <h1 className="title">{title.toUpperCase()}</h1>
   <div className="preview">
    {items.filter((items)=>items.id<5).map(({id,...otherItemProps})=>(
     <CollectionItem key={id} {...otherItemProps}/>
    ))}
   </div>

  </div>
 )
 export default Preview;