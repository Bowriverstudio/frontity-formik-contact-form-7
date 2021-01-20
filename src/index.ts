import { FrontityFormik } from "../types";

const MyForm: FrontityFormik = {
  name: "frontity-formik",

  state: {
    formik: {
      results: {},
    },
  },
  actions: {
    formik: {
      setServerSideErrorMessage: ({ state }) => ({ key, message }) => {
        state.formik.results[key].serverSideErrorMessage = message;
      },
      setSuccessfulMessage: ({ state }) => ({ key, message }) => {
        state.formik.results[key].successfulMessage = message;
      },
      submitFormikContactForm7: ({ actions }) => async (params) => {
        const { id, key, formikActions, values } = params;

        const submitContactForm7 = actions.contactForm7.submitContactForm7;
        const setSuccessfulMessage = actions.formik.setSuccessfulMessage;
        const setServerSideErrorMessage =
          actions.formik.setServerSideErrorMessage;

        submitContactForm7({ values, id })
          .then((message) => {
            formikActions.setStatus({ success: true });
            setServerSideErrorMessage({ key, message: false });
            setSuccessfulMessage({
              key,
              message: "Thank you for joining the waiting list.",
            });
            // TODO why is message unknown.
          })
          .catch((error) => {
            setServerSideErrorMessage({ key, message: error.message });
            setSuccessfulMessage({ key, message: false });
            Object.entries(error.invalid_fields).map(([key, value]) => {
              formikActions.setFieldError(key, value.message);
            });
            formikActions.setStatus({
              error: error.message,
            });
          })
          .finally(() => {
            formikActions.setSubmitting(false);
          });
      },
    },
  },
};

export default MyForm;
