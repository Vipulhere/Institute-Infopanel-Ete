import React, { useEffect, useState } from "react";
import { Avatar, Center } from '@chakra-ui/react'
import Add from "./add";
import Edit from "./edit";
function Details() {
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("sd")));
  }, []);
  const [data, setdata] = useState([]);
  function handledelete(i) {
    // console.log(i);
    const a = data.filter((user) => {
      return user.email !== i;
    });
    // console.log(a);
    setdata(a);
    localStorage.setItem("sd", JSON.stringify(a));
    // console.log(localStorage.getItem("sd"));
  }
  function handleedit(d) {
    setdata(d);
  }
  function handleadd(d) {
    setdata(d);
  }





function handlechange(e){
if(e.target.value===""){
  setdata(JSON.parse(localStorage.getItem("sd")))
}
else{
  console.log("lol")
const  sdata = JSON.parse(localStorage.getItem("sd"))
 const a=  sdata.filter((user)=>{
    return user.name.toLowerCase().includes(e.target.value)
  })
  setdata(a)
}
}




  return (
    <>

    {
    localStorage.getItem("islogin")==="false"?  <Center>Please Login to access this page!</Center>:
<>
<div class="search-box">
    <button class="btn-search">    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div></button>
    <input onChange={handlechange} type="text" class="input-search" placeholder="Type to Search..."/>
  </div>
      <div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Mobile
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Operations
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {" "}
                        <Add onadd={handleadd} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((users, index) => (
                      <tr
                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        key={index}
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Avatar id="image" name={users.name} src={users.image} />
                        </td>
                        
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users.name}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users.mobile}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users.address}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {" "}
                          <button
                            onClick={() => handledelete(users.email)}
                            class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                          >
                    
                            Delete
                          </button>
                          <Edit
                            onedit={handleedit}
                            index={index}
                            user={users}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       
      </div></>}
    </>
  );
}

export default Details;
