import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3)
    .required()
    .matches(/^[^\s].+[^\s]$/),
  description: yup.string().min(10).required(),
  date: yup
    .string()
    .required()
    .test(value => value !== 'Select'),
  time: yup
    .string()
    .required()
    .test(value => value !== 'Select'),
  location: yup
    .string()
    .min(3)
    .required()
    .matches(/^[^\s].+[^\s]$/),

  category: yup
    .string()
    .required()
    .test(value => value !== 'Select'),
  image: yup.string().url().required(),
  priority: yup
    .string()
    .required()
    .test(value => value !== 'Select'),
});

export default validationSchema;
