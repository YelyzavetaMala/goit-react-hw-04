import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

const SearchBar = ({ onSetSearchBar }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, { setSubmitting }) => {
        if (!values.query.trim()) {
          toast.error("Please enter a search query");
           return;
        }
        onSetSearchBar(values.query);
        setSubmitting(false);
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