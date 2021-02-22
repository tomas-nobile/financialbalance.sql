import React from "react";
import { Form,Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.scss";


export default function LoginForm() {
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
          email: Yup.string()
            .email("El email no es valido")
            .required("El email es obligatiorio"),
          password: Yup.string().required("La contraseña es obligatoria"),
        }),
        onSubmit: async (formData) => {
        },
      });
    
      console.log(formik.error);
    return (
        
        <Form className="login-form" onSubmit={formik.handleSubmit}>
        <p className="divider"></p>
        <h2>Take care of your money</h2>
        <Form.Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Form.Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit" className="btn-submit">
          Sign In
        </Button>
        
      </Form>
    );
    
}


function initialValues() {
    return {
      email: "",
      password: "",
    };
  }
  