import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();
    const registerNewCompany = async () =>{
        try {
            const res = await axios.post(`${ COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const comapnyId = res?.data?.comapny?._id;
                navigate(`/admin/companies/${comapnyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <Navbar></Navbar>
        <div className='max-w-4xl mx-auto'>
            <div className='my-10'>
               <h1 className='font-bold text-2xl'>Your Company Name</h1>
            <p className='text-gray-500'>What would you like to give your company name ? you can change it later.</p>  
            </div>
           
            <Label>Company Name</Label>
            <Input
            type="text"
            className="my-2"
            placeholder="JobBazar, Google, etc"
             onChange = {(e)=>setCompanyName(e.target.value)}
            />
            <div className='flex items-center gap-2 my-10'>
                <Button onClick = {()=>navigate("/admin/companies")}  className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2"
                >Cancel</Button>
                <Button onClick = {registerNewCompany} className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2">Continue</Button>
            </div>
           
        </div>
    </div>
  )
}

export default CompanyCreate