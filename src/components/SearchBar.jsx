import { Field, Form, Formik } from "formik";

const SearchBar = ({ onSetSearchBar }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values) => {
        onSetSearchBar(values.query);
      }}
    >
      <Form>
        <Field 
      placeholder="Search images and photos" type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;