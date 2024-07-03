import Login from "./Login";
import SignUp from "./SignUp";

const Tabs = () => {
  return (
    <div role="tablist" className="tabs tabs-lifted my-10">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-2xl sm:text-xl"
        aria-label="Login"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content rounded-box border-base-300 bg-base-100 p-6"
      >
        <Login />
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-2xl sm:text-xl"
        aria-label="Sign up"
      />
      <div
        role="tabpanel"
        className="tab-content rounded-box border-base-300 bg-base-100 p-6"
      >
        <SignUp />
      </div>
    </div>
  );
};

export default Tabs;
