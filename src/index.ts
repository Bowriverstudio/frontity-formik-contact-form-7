import { FrontityFormik, SubmitFormikContactForm7 } from "../types";

const MyForm: FrontityFormik = {
  name: "frontity-formik",

  state: {
    formik: {
      results: {},
    },
  },
  actions: {
    formik: {

      initialState: ({ state }) => (contactForm7id: number) => {

        state.formik.results[contactForm7id] = {
          formikViewState: "Form",
          serverSideErrorMessage: "",
        }
      },

      setServerSideErrorMessage: ({ state }) => ({ contactForm7id, message }) => {
        state.formik.results[contactForm7id] = {
          formikViewState: "Form",
          serverSideErrorMessage: message,
        }
      },
      setSuccessful: ({ state }) => (contactForm7id: number) => {
        state.formik.results[contactForm7id].formikViewState = 'Success';
      },
      submitFormikContactForm7: ({ actions }) => async (params: SubmitFormikContactForm7) => {
        const { contactForm7id, formikActions, values } = params;
        const id = contactForm7id

        const submitContactForm7 = actions.contactForm7.submitContactForm7;
        const setSuccessful = actions.formik.setSuccessful;
        const setServerSideErrorMessage =
          actions.formik.setServerSideErrorMessage;
        submitContactForm7({ values, id })
          .then((message) => {
            formikActions.setStatus({ success: true });
            setSuccessful(id);
          })
          .catch((error) => {
            setServerSideErrorMessage({ id, message: error.message });
            Object.entries(error.invalid_fields).map(([id, value]) => {
              formikActions.setFieldError(id, value.message);
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
