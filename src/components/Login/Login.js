import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../common/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import styles from "../../styles/login.module.css";
import { loginUser } from "../../services/loginService";
import { useState } from "react";
import { useAuthActions } from "../../Providers/AuthProviders";
import { useQuery } from "../Hooks/useQuery";

// 1.initial state
const initialValues = {
  email: "",
  password: "",
};

// 3.validate
const validationSchema = yup.object({
  email: yup
    .string()
    .required("لطفا ایمیل را وارد کنید")
    .email("فرمت ایمیل نادرست هست"),
  password: yup.string().required("لطفا رمز عبور را وارد کنید."),
});

const Login = () => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const [error, setError] = useState(null);
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  // 2.onsubmit
  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      navigate(redirect);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className={styles.formContainer}>
      <h3>ورود</h3>
      <form onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          name="email"
          label="ایمیل"
          type="email"
          placeholder="example@ex.com"
        />
        <Input
          formik={formik}
          name="password"
          label="رمز عبور"
          type="password"
        />
        <div className={styles.containerLinks}>
          <button
            className={styles.logInBtn}
            type="submit"
            disabled={!formik.isValid}
          >
            ورود
          </button>
          {error && <p className={styles.errorLogin}>{error}</p>}
          <Link to={`/sign-up?redirect=${redirect}`}>حساب کاربری ندارید؟</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
