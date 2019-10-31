import React, { useState, useEffect } from 'react';
import DynamicForm from './DynamicForm';
import data from '../../data.json';

const Home = () => {
  const [_fields, setFields] = useState(null);
  const [_initialValues, setInitialValues] = useState(null);
  const [_validations, setValidations] = useState(null);

  useEffect(() => {
    console.log('data : ', typeof data);
    getFormData(data)
      .then(res => {
        console.log('res:: ', res);
        const {
          form: { fields },
        } = res;
        setFields(fields);
        let initValues = {};
        fields.forEach(val => (initValues[val.name] = val.defaultValue));
        setInitialValues(initValues);
        let validations = {};
        fields.forEach(val => (validations[val.name] = val.validations));
        setValidations(validations);
      })
      .catch(err => console.error(err));
  }, []);

  const getFormData = data => {
    return new Promise(resolve => {
      resolve(data);
    });
  };

  return (
    <>
      <div>Home</div>
      <DynamicForm fields={_fields} initialValues={_initialValues} validations={_validations} />
    </>
  );
};

export default Home;
