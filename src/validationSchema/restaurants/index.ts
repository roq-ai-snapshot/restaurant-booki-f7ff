import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  address: yup.string(),
  phone_number: yup.string(),
  email: yup.string(),
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
