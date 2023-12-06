import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import Deleteconformation from './deleteconformation';

export default function Read({perdetail,handelDelete,handelEdit}) {
    // console.log(perdetail);
   
    const handleEdit = (id)=>{
        handelEdit(id);
        console.log(id);
    }

  

    const handleDelete = (id)=>{
        handelDelete(id);
    }

   

  return (
   <>
   {/*All Delete btn*/}
   {/* <div className="flex justify-end mt-10 overflow-x-auto"><button  className="bg-red-500 px-3 py-2 ">  <span> <label className="pr-2 text-white">Delete All</label><FontAwesomeIcon icon={faTrashCan} className="text-white" /></span></button></div> */}
   
   {/*Table*/}
   <table id="customers" className="mt-5">
                <thead>
                    <tr>
                        <th className="bg-blue-500">S.No</th> 
                        <th className="bg-blue-500">Name</th>
                        <th className="bg-blue-500">Description</th>
                        <th className="bg-blue-500">Address</th>
                        <th className="bg-blue-500">City</th>
                        <th className="bg-blue-500">Region</th>
                        <th className="bg-blue-500">PostalCode</th>
                        <th className="bg-blue-500">Country</th>
                        <th className="bg-blue-500">Phone</th>
                        <th className="bg-blue-500">Email</th>
                        <th className="bg-blue-500">Modification</th>
                    </tr>
                    </thead>
                    <tbody>
                    {perdetail.map((prdata, i) => {
                        return (
                            <tr key={i}>
                                <td >{i+1}</td> 
                                <td >{prdata.name}</td>
                                <td >{prdata.description}</td>
                                <td >{prdata.address}</td>
                                <td >{prdata.city}</td>
                                <td >{prdata.region}</td>
                                <td >{prdata.postalCode}</td>
                                <td >{prdata.country}</td>
                                <td >{prdata.phone}</td>
                                <td >{prdata.email}</td>
                                <td className="flex justify-around h-[10vh]">
                                  
                                    <button onClick={()=>handleEdit(prdata.id)}><FontAwesomeIcon className="text-green-500 " icon={faEdit} /></button>
                                    <button onClick={()=>handleDelete(prdata.id)}><FontAwesomeIcon  className="text-red-500 " icon={faTrashAlt} /></button>
                                 
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>

                </table>
              
   </>
  )
}
