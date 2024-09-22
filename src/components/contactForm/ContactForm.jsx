// ----- import du SASS -----
import "./contactForm.scss";
// ----- import de fonction React -----
import { useState } from "react";
// ----- import de la librairie react-hook-form -----
import { useForm } from "react-hook-form";
// ----- import de fonction de traduction -----
import { useTranslation } from "react-i18next";
// ----- import de 'FontAwesome' et des icons -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// ----- import de l'outil 'emailJS' -----
import emailjs from "@emailjs/browser";
// ----- import de 'Toastify' -----
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ----- import du Captcha Google -----
import ReCAPTCHA from "react-google-recaptcha";

// ----- Composant 'ContactForm' -----
export function ContactForm() {
  const { t } = useTranslation();
  const [failedCaptchaStyle, setFailedCaptchaStyle] = useState(false);
  const [hasCompleteCaptcha, setHasCompleteCaptcha] = useState(false);
  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Cette fonction notifie l'utilisateur du succès de l'envoie, et envoie un mail avec leur message
  function sendMail(data) {
    // Fonction de notification 'Toastify'
    notifySuccess();
    // Cela envoie un mail avec le message de l'utilisateur
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
    // Cela reset les saisies de l'utilisateur
    reset();
  }

  // Cette fonction se charge de la partie notification
  const notifySuccess = () => {
    // Cela supprime les anciennes notifications 'Toastify'
    toast.dismiss();
    // Renvoie la notification 'Toastify' de succès
    toast.success(t("formSuccessMessage"), {
      icon: () => <FontAwesomeIcon icon={faCheck} />,
      position: "bottom-right",
    });
  };

  // Cette fonction vérifie si il y as une erreur avec les saisies du formulaire
  const checkErrors = (errors) => {
    if (hasCompleteCaptcha) {
      setFailedCaptchaStyle(false);
      clearErrors("captcha");
    }

    if (
      errors.name ||
      errors.email ||
      errors.object ||
      errors.message ||
      !hasCompleteCaptcha
    ) {
      if (!hasCompleteCaptcha) {
        setFailedCaptchaStyle(true);
        setError("captcha", {
          type: "custom",
          message: "Vous devez valider le captcha",
        });
      }
    }
  };

  // Cela renvoie le formulaire de contact et les composants 'Captcha' et 'Toastify'
  return (
    <div className="form-content">
      <h1 className="form-title">{t("formTitle")}</h1>
      <form className="contact-form" onSubmit={handleSubmit(sendMail)}>
        <label htmlFor="name">{t("formNameLabel")} *</label>
        <input
          {...register("name", { required: true })}
          aria-label="name input"
          className={errors.name ? "form-input is-invalid" : "form-input"}
        />
        <label htmlFor="email">{t("formEmailLabel")} *</label>
        <input
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          aria-label="email input"
          className={errors.email ? "form-input is-invalid" : "form-input"}
        />
        <label htmlFor="object">{t("formObjectLabel")} *</label>
        <input
          {...register("object", { required: true })}
          aria-label="objet input"
          className={errors.object ? "form-input is-invalid" : "form-input"}
        />
        <label htmlFor="message">{t("formMessageLabel")} *</label>
        <textarea
          {...register("message", { required: true })}
          aria-label="message input"
          className={
            errors.message
              ? "form-input form-message-input is-invalid"
              : "form-input form-message-input"
          }
        />
        <ReCAPTCHA
          className={failedCaptchaStyle ? "captcha is-invalid" : "captcha"}
          sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_PUBLIC_KEY}
          onChange={() => {
            setHasCompleteCaptcha(true);
            setFailedCaptchaStyle(false);
          }}
          onErrored={() => {
            setHasCompleteCaptcha(false);
            setFailedCaptchaStyle(true);
          }}
          onExpired={() => {
            setHasCompleteCaptcha(false);
            setFailedCaptchaStyle(true);
          }}
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
        autoClose={5000}
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
        limit={1}
      />
    </div>
  );
}
