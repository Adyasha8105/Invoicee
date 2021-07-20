import React from "react";
// import { Transition } from "@headlessui/react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import firebase from "../../firebase/firebase";
// import { useHistory } from "react-router";
// import { logout } from "../../actions/index";

function Navbar() {
  // const user = useSelector((state) => state.userReducer.user);
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       dispatch(logout);
  //       history.push("/");
  //     });
  // };

  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white blur shadow-lg">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <Link className="block">
                <img
                  src={require("../../Images/Mainlogo.svg").default}
                  width="150"
                  height="96"
                  alt="logo"
                  // className="hidden md:block"
                />
                {/* <img
                    src={require("../../Images/Favicon.svg").default}
                    width="26"
                    height="26"
                    alt="logo"
                    className="block md:hidden"
                  /> */}
              </Link>
            </div>
          </div>

          {/* <div className="hidden md:flex md:flex-row md:space-x-4">
              <div className="ml-10 flex items-baseline space-x-4 justify-end flex-wrap items-center flex-grow">
                <Link className="font-bold text-gray-400 hover:opacity-75 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Draft
                </Link>
                <button
                  onClick={handleLogout}
                  className="font-bold text-gray-400 hover:opacity-75 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Logout
                </button>

                <div className="rounded-md text-sm font-medium">
                  <div className="flex flex-row w-full space-x-4">
                    <div className="self-center pr-2 text-primary font-semibold">
                      {user.displayName}
                    </div>
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div> */}

          {/* <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 selected:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div> */}
        </div>

        {/* <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="md:hidden" id="mobile-menu">
                  <Link className="font-bold text-gray-400 hover:opacity-75 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Draft
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="font-bold text-gray-400 hover:opacity-75 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Logout
                  </button>

                  <div className="rounded-md text-sm font-medium">
                    <div className="flex flex-row w-full  px-5 py-3">
                      <img
                        src={user.photoURL}
                        className="w-10 h-10 rounded-full"
                        alt="user"
                      />
                      <div className="self-center pr-2 text-primary font-semibold">
                        &nbsp;&nbsp;{user.displayName}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition> */}
      </nav>
    </div>
  );
}

export default Navbar;
