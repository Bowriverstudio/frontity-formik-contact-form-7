import { Action, AsyncAction, Package } from "frontity/types";

export type SubmitFormikContactForm7 = {
  /**
   * Contact Form 7 ID
   */
  id: number;
  /**
   * Values to submit to Contact Form7.
   */
  values: [];
  /**
   * Key used to store results.
   */
  key: string;
  /**
   * Formik Actions callback.
   */
  formikActions: unknown;
};

type FormikResults = {
  /**
   * The error message from server side validation.  Default is false.
   */
  serverSideErrorMessage: string | boolean;

  /**
   * Successful message from server side.  Default is false.
   */
  successfulMessage: string | boolean;
};

type FormikMessagingArgs = {
  key: string | number;
  message: string | boolean;
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
      submitFormikContactForm7: AsyncAction<
        FrontityFormik,
        SubmitFormikContactForm7
      >;
      setServerSideErrorMessage: Action<FrontityFormik, FormikMessagingArgs>;
      setSuccessfulMessage: Action<FrontityFormik, FormikMessagingArgs>;
    };
  };
}
