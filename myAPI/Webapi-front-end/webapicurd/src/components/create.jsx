import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/url";
import axios from "axios";
import Read from "./read";

const Create = () => {
    const [Id,setId] = useState('');
    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Region, setRegion] = useState('');
    const [PostalCode, setPostalCode] = useState('');
    const [Country, setCountry] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [perdetail, setPerdetails] = useState([]);
    const [update,setUpdate] = useState(false);
    const [post,setpost] = useState("");

    const Pdata =  {
        "name": Name,
        "description": Description,
        "address": Address,
        "city": City,
        "region": Region,
        "postalCode": PostalCode,
        "country": Country,
        "phone": Phone,
        "email": Email
    };

    const Clear =()=>{
        setName("");
            setDescription("");
            setAddress("");
            setCity("");
            setRegion("");
            setPostalCode("");
            setCountry("");
            setPhone("");
            setEmail("");
            }
    
    useEffect(()=>{
        (async ()=> await getData())()
    },[]);

    //Get data
    async function getData(){
        await axios.get(API_URL)
        .then(result=> setPerdetails(result.data))
        .catch(err=>console.log(err));
    }

    //Post Create Personal details btn
    const handleSave = () => {
        if (
            !Name ||
            !Description ||
            !Address ||
            !City ||
            !Region ||
            !PostalCode ||
            !Country ||
            !Phone ||
            !Email
          ) 
          {
           setTimeout(() => {
                setpost("Fill the all fileds")
           }, 0);
           setTimeout(() => {
            setpost("")
       }, 2000);
           
          } 
          else{
            axios.post(API_URL,Pdata)
            .then(result=>{getData();Clear(); setUpdate(false);})
            .catch(err => console.log(err));
            setTimeout(() => {
                setpost("Created succesfully")
           }, 0);
           setTimeout(() => {
            setpost("")
       }, 2000); 
          }
    };

    //Delete
    const handelDelete = (id) =>{
        axios.delete(`https://localhost:7140/api/Personaldetails/${id}`)
        .then(result =>{if(result.status == 200) {getData()}})
        .catch(err => console.log(err))
    }

    // Put Update or Edit 
    const handelEdit = (id)=>{
        switch (update) {
            case false:
                axios.get(`https://localhost:7140/api/Personaldetails/${id}`)
                .then(result=>{
                    setUpdate(true);
                    setId(result.data.id);
                    setEmail(result.data.email);
                    setName(result.data.name);
                    setDescription(result.data.description);
                    setAddress(result.data.address);
                    setCity(result.data.city);
                    setRegion(result.data.region);
                    setPostalCode(result.data.postalCode);
                    setCountry(result.data.country);
                    setPhone(result.data.phone);
                    setEmail(result.data.email);
                });
                break;
                case true:
                            axios.put(`https://localhost:7140/api/Personaldetails/${Id}`, 
                            {   
                                "id": `${Id}`,
                                "name": Name,
                                "description": Description,
                                "address": Address,
                                "city": City,
                                "region": Region,
                                "postalCode": PostalCode,
                                "country": Country,
                                "phone": Phone,
                                "email": Email
                            })
                        .then(result=>{setUpdate(false);getData();Clear();  })
                        .catch(err => {console.log(err);console.log(Pdata);});
            default:
                break;
        }       
    }
    
    return (
        <>
       
            <section className=" mt-10">
                <p className="text-3xl font-bold">Personal Details</p>

                <ul className="mt-8 w-1/2 input-list-prdetails">
                
                    <li className="flex justify-between items-center mt-3"><label>Name</label> <input required type="text" value={Name} onChange={e => setName(e.target.value)} /></li>
                    <li className="flex justify-between items-center mt-3"><label>Description</label> <input required type="text" value={Description} onChange={e => setDescription(e.target.value)} /></li>
                    <li className="flex justify-between items-center mt-3"><label>Address</label> <input required type="text" value={Address} onChange={e => setAddress(e.target.value)} /></li>
                    <li className="flex justify-between items-center mt-3"><label>City</label> <input required type="text" value={City} onChange={e => setCity(e.target.value)} /></li>
                    <li className="flex justify-between items-center mt-3"><label>Region</label> <input required type="text" value={Region} onChange={e => setRegion(e.target.value)} /></li>
                    <li className="flex justify-between items-center mt-3"><label>PostalCode</label> <input required type="text" value={PostalCode} onChange={e => setPostalCode(e.target.value)} /></li>
                    <li className="flex justify-between items-center mt-3"><label>Country</label> <input required type="text" value={Country} onChange={e => setCountry(e.target.value)} /></li>
                    <li className="flex justify-between items-center mt-3"><label>Phone</label> <input required type="text" value={Phone} onChange={e => setPhone(e.target.value)} /></li>
                    <li className="flex justify-between items-center mt-3"><label>Email</label> <input required type="text" value={Email} onChange={e => setEmail(e.target.value)} /></li>
                </ul>

                <button onClick={()=>{if(update == false)handleSave(); else handelEdit();}   } className="px-4 py-2 bg-blue-500 text-white  mt-8">{update ==false ? "Add Details" : "update"}</button>
                
                <div className="flex items-center mt-5 gap-x-3">
                <p className={`block text-xl ${update? "text-red-500":"underline font-medium"}`}>{update ? "Update your details or double click on edit icon to exit": "Personal Details Table"}
                </p> 
                 <span className={`create-details ${post ==="Fill the all fileds" ? "text-red-500": post === "Created succesfully" ? "text-green-500":" " } text-base font-semibold `}>{post}</span>
                </div>

                <Read perdetail={perdetail} handelDelete={handelDelete} handelEdit={handelEdit} />

            </section>


        </>
    )
}
export default Create