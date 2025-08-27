import { useState } from 'react';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CTA, P } from '../../styles/GlobalStyles';
import { Form, ThanksMsg } from './Contact.style';
import { TrueIcon } from '../../icons';

import FloatingInput from './FloatingInput';

const ContactForm = () => {
  const regEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = async (data) => {
    if (isSubmitting) {
      return;
    }
    try {
      const result = await emailjs.send(
        'service_8kf0yml',
        'template_l448szb',
        data,
        'H95rIMeLt3Dfed7zL'
      );
      if (result.text === 'OK') {
        console.log(result);
        toast.success('Email sent successfully!');
        reset();
        setSubmitting(true);
      } else {
        toast.error('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send email. Please try again later.');
    }
  };

  return (
    <>
      {!isSubmitting ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FloatingInput
            type='text'
            name='name'
            label='Your Name'
            register={register}
            errors={errors}
          />
          <FloatingInput
            type='email'
            name='email'
            label='Your Email'
            register={register}
            errors={errors}
            pattern={regEmail}
          />

          <FloatingInput
            type='textarea'
            name='message'
            label='Your Message'
            register={register}
            errors={errors}
          />
          <CTA variation='send' type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send a Message'}
          </CTA>
        </Form>
      ) : (
        <ThanksMsg>
          <TrueIcon />
          <P>Thank You!</P>
          <P>I have received your email,</P>
          <P>I will be in touch and contact you shortly.</P>
        </ThanksMsg>
      )}

      <ToastContainer />
    </>
  );
};

export default ContactForm;
