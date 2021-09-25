import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Quá ngăn!")
    .max(10, "Quá dài!")
    .required("Bạn phải nhập trường này!"),
  password: Yup.string()
    .min(6, "Quá ngắn!")
    .max(10, "Quá dài!")
    .required("Bạn phải nhập trường này!"),
  email: Yup.string()
    .email("Email chưa hợp lệ!")
    .required("Bạn phải nhập trường này"),
});
