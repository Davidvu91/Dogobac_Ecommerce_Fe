import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Quá ngăn!")
    .max(100, "Quá dài!")
    .required("Bạn chưa nhập tên!"),
  password: Yup.string()
    .min(8, "Quá ngắn!")
    .max(100, "Quá dài!")
    .required("Bạn chưa tạo password!"),
  email: Yup.string()
    .email("Email của bạn chưa hợp lệ!")
    .required("Bạn chưa nhập email!"),
});
