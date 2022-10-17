import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function Edit(props) {
  const [data, setdata] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    image:""
  });
  function handleclick(index) {
    if(data.name===""||data.email===""||data.mobile===""||data.address===""){
      alert("Please enter all details")
          }else{
    const sd = JSON.parse(localStorage.getItem("sd"));
    console.log(sd);
    for (let i = 0; i < sd.length; i++) {
      if (i === index) {
        sd[i] = data;
      }
    }
    props.onedit(sd);
    localStorage.setItem("sd", JSON.stringify(sd));
  }}
  function handleedit() {
    setdata(props.user);
  }
  function handlechange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  function handlespace(event){
    if(event.keyCode === 32){
     alert("lol")
  }
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={handleedit}
          className="inline-flex w-full justify-center   px-4 py-2 text-sm font-medium text-gray-700  "
        >
         <button
                            
                            class="inline-flex h-9 items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
                          >
                          
                           Edit
                          </button>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ height: "1px", paddingTop: "4px", marginTop:"50px" }}
          className="absolute right-100 z-10 h-96 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div
            style={{ height: "100px" }}
            className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
          >
            <div className="w-full max-w-md space-y-8">
              <div></div>
              <form className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label className="sr-only">Name</label>
                    <input
                      onChange={handlechange}
                      value={data.name}
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email
                    </label>
                    <input
                      onChange={handlechange}
                      value={data.email}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Mobile
                    </label>
                    <input
                      onChange={handlechange}
                      value={data.mobile}
                      name="mobile"
                      type="text"
                      autoComplete="mobile"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Mobile"
                    />
                  </div>
                  <div>
                    <label className="sr-only">Address</label>
                    <input
                   onKeyDown={handlespace}
                      onChange={handlechange}
                      value={data.address}
                      name="address"
                      type="text"
                      autoComplete="address"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Address"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-address" className="sr-only">
                    Image
                    </label>
                    <input
                      onChange={handlechange}
                      value={data.image}
                      name="image"
                      type="text"
                      autoComplete="mobile"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Image"
                    />
                  </div>
                  <beutton
                    onClick={() => handleclick(props.index)}
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                   Update
                  </beutton>
                </div>

                <div style={{ marginTop: "30px" }}></div>
              </form>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
