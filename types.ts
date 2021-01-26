import { Action, AsyncAction, Package } from "frontity/types";

export type SubmitFormikContactForm7 = {
  /**
   * Contact Form 7 ID
   */
  contactForm7id: number;
  /**
   * Values to submit to Contact Form7.
   */
  values: [];

  /**
   * Formik Actions callback.
   */
  formikActions: unknown;
};

type FormikResults = {

  /**
   * The form can be in one of the following states.
   */
  formikViewState: 'Form' | 'HasServerSideErrors' | 'Success';

  /**
   * The error message from server side validation.  Default is false.
   */
  serverSideErrorMessage: string;

};

type FormikMessagingArgs = {
  contactForm7id: string | number;
  message: string;
};

export interface FrontityFormik extends Package {
  name: "frontity-formik";
  state: {
    formik: {
      results: Partial<FormikResults>;
    };
  };
  actions: {
    formik: {
      initialState: Action<FrontityFormik, number>;
      submitFormikContactForm7: AsyncAction<
        FrontityFormik,
        SubmitFormikContactForm7
      >;
      setServerSideErrorMessage: Action<FrontityFormik, FormikMessagingArgs>;
      setSuccessful: Action<FrontityFormik, number>;
    };
  };
}
