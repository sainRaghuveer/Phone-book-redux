import { Button, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPhoneAction } from '../Redux/phoneData/action';
import uniqid from 'uniqid';

const Home = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [label, setLabel] = useState("");
    const dispatch=useDispatch();

    const data=useSelector(store=>{return store});

    console.log(data);

    const handlePhone=()=>{
        let obj={
            id:uniqid(),
            name:name,
            image:image,
            phone:phone,
            address:address,
            label:label
        }
        dispatch(addNewPhoneAction(obj));
    }

  return (
    <div>
        <Input type='text' value={name} placeholder='Type Name..' onChange={(e)=>setName(e.target.value)}/>
        <Input type='text' value={image} placeholder='Image..' onChange={(e)=>setImage(e.target.value)}/>
        <Input type='text' value={phone} placeholder='Type New Phone Number..' onChange={(e)=>setPhone(e.target.value)}/>
        <Input type='text' value={address} placeholder='Type New Address..' onChange={(e)=>setAddress(e.target.value)}/>
        <Select value={label} placeholder='Label' onChange={(e)=>setLabel(e.target.value)}>
          <option value={"Work"}>Work</option>
          <option value={"School"}>School</option>
          <option value={"Friends"}>Friends</option>
          <option value={"Family"}>Family </option>
        </Select>
        <Button onClick={handlePhone}>Add</Button>
    </div>
  )
}

export default Home