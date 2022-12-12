import React from "react";
import { Field, Form, Formik } from 'formik';
import { Header, InputButton } from "./Searchbar.styled";
import PropTypes from "prop-types";

const SearchBar = ({onSubmit}) => {
  const onSubmitHandle = (values, actions) => {
    onSubmit(values.text.trim())
    actions.resetForm()
  };
  return (
    <Header>
      <Formik initialValues={{ text: '' }} onSubmit={onSubmitHandle}>
        <Form>
         <InputButton type="submit">
           <span>Search</span>
         </InputButton>
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

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBar