import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Search from './Search';
import Table from './Table';

const base_url = "http://localhost:8080/api/staff";

const NitteTrail = () => {

  const [obj,setObj] = useState({});
  const [sort,setSort] = useState({sort:"dept",order:"desc"});
  const [filterDept,setFilterDept] = useState([]);
  const [page,setPage] = useState(1);
  const [search,setSearch] = useState("");
  const [typed,setTyped] = useState(false);


  useEffect(()=>{
    const getAllStaffs = async ()=>{
      try{
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&dept=${filterDept.toString()}&search=${search}`
        const {data} = await axios.get(url);
        setObj(data);
        console.log(data);
      }
      catch(err){
        console.log(err);
      }
    };
    getAllStaffs();
  },[sort,filterDept,page,search]);


  return (
    <div className='h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r' style={{paddingTop:search?"10rem":"16rem"}}>
       {search?"":<h1 className='text-7xl font-bold text-center text-white flex justify-center items-center nittetext'>NitteTrail</h1>}
        <form className='xl:mx-[25rem] lg:mx-[20rem] md:mx-[15rem] sm:mx-[10rem] mx-8 mt-8'>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <Search setSearch={(search)=>setSearch(search)}/>
        <button type="submit" className=" text-black absolute right-2.5 bottom-2.5 bg-white hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-4 py-2 dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-red-800">Search</button>
    </div>
</form>
<div>
{search !== "" && <Table staffs={obj.staffs?obj.staffs:[]}/>}
</div>
    </div>
  )
}
export default NitteTrail