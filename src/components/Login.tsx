import { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import EmailIcon from "../icons/EmailIcon";
import PasswordIcon from "../icons/PasswordIcon";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
          <ErrorMessage message="test" />
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
              {true ? <LoadingSpinner /> : "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
