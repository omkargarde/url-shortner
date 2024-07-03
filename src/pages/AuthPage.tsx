import { useSearchParams } from "react-router-dom";
import Tabs from "../components/Tabs";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="mt-36 flex min-h-screen flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {searchParams.get("createNew")
          ? "You need to Login first"
          : "Login / Sign up"}
      </h1>
      <Tabs />
    </div>
  );
};

export default AuthPage;
