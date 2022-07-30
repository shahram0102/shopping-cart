import styles from "../../styles/input.module.css";

const Input = ({ placeholder, name, label, formik, type = "text" }) => {
  return (
    <div className={styles.formControl}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className={styles.error}>{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Input;
