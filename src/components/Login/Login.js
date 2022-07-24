import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../common/Input/Input";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

// 1.initial state
const initialValues = {
  email: "",
  password: "",
};

// 2.onsubmit
const onSubmit = (values) => {
  console.log(values);
};

// 3.validate
const validationSchema = yup.object({
  email: yup
    .string()
    .required("لطفا ایمیل را وارد کنید")
    .email("فرمت ایمیل نادرست هست")
    .min(8, "مقدار ایمیل باید بیشتر از 8 کاراکتر باشد."),
  password: yup.string().required("لطفا رمز عبور را وارد کنید."),
});

const Login = () => {
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
          <button className={styles.logInBtn} type="submit" disabled={!formik.isValid}>
            ورود
          </button>
          <Link to="/sign-up">حساب کاربری ندارید؟</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
