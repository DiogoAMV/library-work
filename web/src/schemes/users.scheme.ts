import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().required("O username é obrigatório"),
  email: Yup.string().email("Email inválido").required("O email é obrigatório"),
  password_hash: Yup.string().required("A senha é obrigatória"),
  createdAt: Yup.date().optional(),
});
