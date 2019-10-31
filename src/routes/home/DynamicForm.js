import React from 'react';
import { Formik } from 'formik';

const DynamicForm = ({ initialValues, validations, fields }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validations}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write yours" />
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default DynamicForm;
