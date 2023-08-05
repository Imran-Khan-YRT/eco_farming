import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomButton from "../CommonComponents/CustomButton";

const fieldStyle = "bg-tertiary px-3 py-3 my-2 md:min-w-[400px] min-w-full";

interface FormValues {
  name: string;
  email: string;
  problems: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  problems: Yup.string().required("Please describe your problems"),
});

const MyForm: React.FC = () => {
  const handleSubmit = (values: FormValues, { setSubmitting }: any) => {
    // Do something with the form values (e.g., submit data to the server)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        problems: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="text" name="name" id="name" className={fieldStyle} placeholder="Enter Your Name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <Field type="email" name="email" id="email" className={fieldStyle} placeholder="Enter your email Address" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            {/* <label htmlFor="problems">Problems:</label> */}
            <Field as="textarea" name="problems" id="problems" rows={4} className={fieldStyle} placeholder="Define Your Problem" />
            <ErrorMessage name="problems" component="div" className="error" />
          </div>

          <CustomButton type="submit" disabled={isSubmitting} style="mt-4">
            Submit
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
