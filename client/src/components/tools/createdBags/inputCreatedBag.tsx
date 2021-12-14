/**createdbag sql values are(color_id, designcolors_id, designs_id, bagid,quantity,itemtype_id) 
    this page should get created bag from cart and pass it to sql db
*/

import React, { Fragment, useState } from "react";

import { useCreatedBagStore, useBagStore } from "../store/store";

const CreatedBags = () => {
 
  const addCreatedBag = useCreatedBagStore((state)=> state.addCreatedBag)
  const bags = useBagStore((state) => state.bags);
  const createdBag = useCreatedBagStore((state)=> state.createdBag)

 
       

        


         
    
  
  return (
    <Fragment>
     
      <h1>Created bags</h1>
      
      
        
      
    </Fragment>
  );
};
export default CreatedBags;
