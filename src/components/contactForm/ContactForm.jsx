import "./contactForm.scss";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function sendMail(data) {
  emailjs
    .send(
      import.meta.env.VITE_MAILER_SECRET,
      import.meta.env.VITE_MAILER_TEMPLATE_SECRET,
      {
        name: data.name,
        object: data.object,
        message: data.message,
        email: data.email,
      },
      {
        publicKey: import.meta.env.VITE_MAILER_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        // Le mail a été envoyé
        console.log("SUCCESS!");
      },
      (error) => {
        // Le mail n'a pas été envoyé
        console.log("FAILED...", error);
      }
    );
}

export function ContactForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  return (
    <>
      <form
        className="contact-form"
        onSubmit={handleSubmit((data) => sendMail(data))}
      >
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
        <input
          {...register("message", { required: true })}
          className={
            errors.message
              ? "form-input form-message-input is-invalid"
              : "form-input form-message-input"
          }
        />
        <input type="submit" className="form-submit-button" />
      </form>
      <div
        className={
          errors.name || errors.email || errors.object || errors.message
            ? "form-error-message form-error"
            : "form-error-message"
        }
      >
        {t("formErrorMessage")}
      </div>
      <div
        className={
          !errors.name &&
          !errors.email &&
          !errors.object &&
          !errors.message &&
          isSubmitted
            ? "form-success-message form-success"
            : "form-success-message"
        }
      >
        {t("formSuccessMessage")}
      </div>
    </>
  );
}
