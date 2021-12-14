 import React, { Fragment, useEffect, useState } from "react";

 import {useCreatedBagStore, useBagStore } from "../store/store";
 import { DesignType,BagColorType,DesignColorType } from "../store/store";

 /** this page gets created bags from db and shows in order page */


 const ListCreatedBag = () => {
   const [allCreatedBags, setCreatedBags] = useState([]);
   const bags = useBagStore((state) => state.bags)
   const getCreatedBag = async () => {
     try {
       const response = await fetch("http://localhost:5000/createdBags");
       const jsonData = await response.json();
 
       setCreatedBags(jsonData);
      
     } catch (err: any) {
       console.error(err.message);
     }
   };
   useEffect(() => {
    getCreatedBag();
  }, []);


  return(
    <Fragment>
      <table>
    <thead>
      <tr>
        <td>order id</td>
        <td>Customer Id</td>
        <td>Bag ID</td>
        <td>DESCRIPTION</td>
      </tr>
    </thead>
    <tbody>
    { bags.map((bag)=> (
<>   
   <tr>
    <td key= {bag.id}> </td>
     <td ></td>
     
    <td className="bold">{bag.id} </td>
     <td> Bag color: {bag.bagColorName}</td> 
      </tr>
   <tr>
     <td></td>
      <td></td>
      <td></td>
     <td> {bag.designName}</td>
   </tr>
   <tr>
     <td></td>
      <td>  </td>
      <td></td>
     <td> {bag.designColorName} </td> 
     </tr>
    </> 
    ))}

    </tbody>
    </table>
    </Fragment>
  )
 }

  export default ListCreatedBag




