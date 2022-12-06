import React from "react";
import { Field, Form, Formik } from 'formik';
import { Header } from "./Searchbar.styled";

const SearchBar = ({onSubmit}) => {
  const onSubmitHandle = (values, actions) => {
    onSubmit(values.text.trim())
    actions.resetForm()
  };
  return (
    <Header>
      <Formik initialValues={{ text: '' }} onSubmit={onSubmitHandle}>
        <Form>
         <button type="submit">
           <span>Search</span>
         </button>
         <Field
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
         />
       </Form>
      </Formik>
    </Header>
  )
}

export default SearchBar