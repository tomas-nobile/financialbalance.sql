import React from "react";
import { Form,Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify'
import "./RegisterForm.scss";

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: value(),
    validationSchema: validation(),
    onSubmit: (formData) => {
      if(formik.errors){
        const errors= formik.errors
        toast.error(errors)
      }
    },
  });

  console.log(formik.errors);

  return(
    <>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <p className="divider"></p>
        <h2>Create a user</h2>

        <Form.Input
          placeholder="Name"
          name="name"
          type="text"
          onChange={formik.handleChange}
        /> 
        <Form.Input
          placeholder="Username"
          name="username"
          type="text"
          onChange={formik.handleChange}
        />
        <Form.Input
          placeholder="Email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          
        />
        <Form.Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={formik.handleChange}         
        />
        <Form.Input
          placeholder="Repeat password"
          name="repeat-password"
          type="password"
          onChange={formik.handleChange}         
        />
        <Button type="submit" className="btn-submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
}

function value() {
  return {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}

function validation() {
  return Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    username: Yup.string()
      .matches(
        /^[a-zA-Z0-9-]*$/,
        "El nombre del usuario no puede tener espacio"
      )
      .required("El usuario es obligatorio"),
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .oneOf(
        [Yup.ref("repeatPassword")],
        "Las contraseñas no son iguales"
      ),
    repeatPassword: Yup.string()
      .required("La contraseña es obligatoria")
      .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
  })
}
