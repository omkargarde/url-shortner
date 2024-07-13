import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import { UrlState } from "../Context";
import { login } from "../api/apiAuth";
import useFetch from "../hooks/useFetch";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { data, loading, error, fn: fnLogin } = useFetch(login, formData);
  const { fetchUser } = UrlState();

  useEffect(() => {
    if (error === null && data) {
      if (longLink) navigate(`/dashboard?createNew=${longLink}`);
      else navigate("/dashboard");
      fetchUser();
    }
  }, [data, error, longLink, navigate]);

  const handleLogin = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is Required"),
      });
      await schema.validate(formData, { abortEarly: false });
      await fnLogin();
    } catch (error) {
      const newErrors = {};
      error?.inner?.forEach(
        (err: { path: string | number; message: string }) => {
          newErrors[err.path] = err.message;
        },
      );
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <p>to your account if you have one</p>
          {error && <ErrorMessage message={error?.message} />}
          <div className="card-actions justify-start">
            <label className="form-control w-full">
              <input
                name="email"
                type="text"
                placeholder="Enter your Email"
                className="input input-bordered"
                onChange={handleInput}
              />
              <div className="label">
                <span className="label-text w-full">
                  {errors?.email && <ErrorMessage message={errors?.email} />}
                </span>
              </div>
            </label>
            <label className="form-control w-full">
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                onChange={handleInput}
              />
              <div className="label">
                <span className="label-text w-full">
                  {errors?.password && (
                    <ErrorMessage message={errors?.password} />
                  )}
                </span>
              </div>
            </label>
            <button
              className="btn btn-primary btn-wide text-lg sm:text-xl"
              onClick={handleLogin}
            >
              {loading ? <LoadingSpinner /> : "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
