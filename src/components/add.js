import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function Add(props) {
  let initsd;
  if (localStorage.getItem("sd") === null) {
    initsd = [];
  } else {
    initsd = JSON.parse(localStorage.getItem("sd"));
  }

  const [data, setdata] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    image:""
  });
  const [details, setdetails] = useState(initsd);

  useEffect(() => {
    localStorage.setItem("sd", JSON.stringify(details));
  }, [details]);

  function handleclick(e) {
    e.preventDefault();
    if(data.name===""||data.email===""||data.mobile===""||data.address===""){
alert("Please enter all details")
    }else{
     const data1 = JSON.parse(localStorage.getItem("sd"))
    const check = data1.filter((user) => {
      return user.email === data.email;
    });
    if (check.length === 0) {
      const sd = [...details, data];
      setdetails(sd);
      localStorage.setItem("sd", JSON.stringify(sd));
      props.onadd(sd);
    } else {
      alert("User already exists!");
    }
  }
  }

  function handlechange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 ">
          <div
            class="button w-12 h-10 bg-blue-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    transition-all duration-200 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]
    border-[1px] border-blue-400
  "
          >
            <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
              +
            </span>
          </div>
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
          style={{ height: "0px", paddingTop: "4px", marginRight:"30px" }}
          className="absolute right-1 z-10 h-96 w-96 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                      onChange={handlechange}
                      name="address"
                      type="text"
                      autoComplete="address"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <label className="sr-only">Image URL</label>
                    <input
                      onChange={handlechange}
                      name="image"
                      type="text"
                      autoComplete="address"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Image URL"
                    />
                  </div>
                  <button
                    onClick={handleclick}
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Submit
                  </button>
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
