import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomButton from "../CommonComponents/CustomButton";

const fieldStyle = "sm:w-[25rem] w-[16rem] bg-tertiary pl-4 py-2 my-2 rounded border-none transition-colors";

interface FormValues {
  name: string;
  email: string;
  problems: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(""),
  email: Yup.string().email("Invalid email").required(""),
  problems: Yup.string().required(""),
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
      {({ isSubmitting, isValid }) => (
        // by default flex-col for form
        <Form className=" font-[300]">
          {/* add label or show error ErrorMessage using validation */}
          <div className="w-full">
            <Field type="text" name="name" id="name" placeholder="Enter Your Name" className={fieldStyle} />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <Field type="email" name="email" id="email" className={fieldStyle} placeholder="Enter your email Address" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <Field as="textarea" name="problems" id="problems" rows={4} className={fieldStyle} placeholder="Define Your Problem" />
            <ErrorMessage name="problems" component="div" className="error" />
          </div>

          <CustomButton type="submit" disabled={isSubmitting || !isValid} className="mt-4 w-full font-bold">
            Submit
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
