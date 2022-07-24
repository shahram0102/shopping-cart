import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../common/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import styles from "./signup.module.css";
import { signupUser } from "../../services/signupService";
import { useState } from "react";

// 1.initial state
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

// 3.validate
const validationSchema = yup.object({
  name: yup
    .string()
    .required("لطفا نام خود را وارد کنید")
    .min(8, "مقدار اسم باید بیشتر از 8 کاراکتر باشد.")
    .max(16, "مقدار اسم باید کمتر از 16 کاراکتر باشد."),
  email: yup
    .string()
    .required("لطفا ایمیل را وارد کنید")
    .email("فرمت ایمیل نادرست هست")
    .min(8, "مقدار ایمیل باید بیشتر از 8 کاراکتر باشد."),
  password: yup
    .string()
    .required("لطفا رمز عبور را وارد کنید.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "پسسورد باید بیشتر از 8کاراکتر باشد, حدا اقل یک حرف بزرگ را وارد کنید , حدااقل یک حرف کوچیک را وارد کنید , حدااقل یک عدد و یک کاراکتر خاص را وارد کنید"
    ),
  passwordConfirmation: yup
    .string()
    .required("تایید رمز عبور را وارد کنید.")
    .oneOf([yup.ref("password"), null], "پسورد هم خوانی ندارد"),
  phoneNumber: yup
    .string()
    .required("شماره تلفن ضروری هست.")
    .matches(/^[0-9]{11}$/, "فرمت شماره تلفن اشتباه هست.")
    .nullable(),
});

const SignUp = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // 2.onsubmit
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = { name, email, phoneNumber, password };
    try {
      const { data } = await signupUser(userData);
      console.log(data);
      setError(null);
      navigate("/");
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
      <h3>ثبت نام</h3>
      <form onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          name="name"
          label="نام و نام خانوادگی"
          placeholder="شهرام خاله"
        />
        <Input
          formik={formik}
          name="email"
          label="ایمیل"
          type="email"
          placeholder="example@ex.com"
        />
        <Input
          formik={formik}
          name="phoneNumber"
          label="شماره تلفن"
          type="tel"
          placeholder="09120000000"
        />
        <Input
          formik={formik}
          name="password"
          label="رمز عبور"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirmation"
          label="تکرار رمز عبور"
          type="password"
        />
        <div className={styles.containerLinks}>
          <button
            className={styles.registeredBtn}
            type="submit"
            disabled={!formik.isValid}
          >
            ثبت نام
          </button>
          {error && <p className={styles.errorSignUp}>{error}</p>}
          <Link to="/log-in">قبلا ثبت نام کرده اید؟</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
