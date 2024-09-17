import "./contactForm.scss";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
// import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function sendMail(data) {
    notifySuccess();
    console.log(data);
    // emailjs
    //   .send(
    //     import.meta.env.VITE_MAILER_SECRET,
    //     import.meta.env.VITE_MAILER_TEMPLATE_SECRET,
    //     {
    //       name: data.name,
    //       object: data.object,
    //       message: data.message,
    //       email: data.email,
    //     },
    //     {
    //       publicKey: import.meta.env.VITE_MAILER_PUBLIC_KEY,
    //     }
    //   )
    //   .then(
    //     () => {
    //       // Le mail a été envoyé
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       // Le mail n'a pas été envoyé
    //       console.log("FAILED...", error);
    //     }
    //   );
    reset();
  }

  const notifySuccess = () => {
    // This removes all toasts from before
    toast.dismiss();
    toast.success(t("formSuccessMessage"), {
      icon: () => <FontAwesomeIcon icon={faCheck} />,
      position: "bottom-right",
    });
  };

  const checkErrors = (errors) => {
    if (errors.name || errors.email || errors.object || errors.message) {
      // This removes all toasts from before
      toast.dismiss();
      toast.error(t("formErrorMessage"), {
        icon: () => <FontAwesomeIcon icon={faTriangleExclamation} />,
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="form-content">
      <h1 className="form-title">{t("formTitle")}</h1>
      <form className="contact-form" onSubmit={handleSubmit(sendMail)}>
        <label htmlFor="name">{t("formNameLabel")} *</label>
        <input
          {...register("name", { required: true })}
          className={errors.name ? "form-input is-invalid" : "form-input"}
        />
        <label htmlFor="email">{t("formEmailLabel")} *</label>
        <input
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          className={errors.email ? "form-input is-invalid" : "form-input"}
        />
        <label htmlFor="object">{t("formObjectLabel")} *</label>
        <input
          {...register("object", { required: true })}
          className={errors.object ? "form-input is-invalid" : "form-input"}
        />
        <label htmlFor="message">{t("formMessageLabel")} *</label>
        <textarea
          {...register("message", { required: true })}
          className={
            errors.message
              ? "form-input form-message-input is-invalid"
              : "form-input form-message-input"
          }
        />
        <input
          type="submit"
          className="form-submit-button"
          onClick={() => {
            checkErrors(errors);
          }}
        />
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={50000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
        limit={2}
      />
    </div>
  );
}
