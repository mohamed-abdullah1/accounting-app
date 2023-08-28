import { Box, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import FormButtons from "../../components/FormButtons";
import "./style.css";
const SalesAdd = () => {
  const { t } = useTranslation();
  const schema = yup.object().shape({
    name: yup.string().required(t("name_required")),
    phone: yup
      .string()
      .matches(/^01[0125][0-9]{8}$/, t("phone_not_valid"))
      .required(t("phone_required")),
    email: yup
      .string()
      .email(t("email_not_valid"))
      .required(t("email_required")),
    price: yup.string().required(t("price_required")),
    address: yup.string().required(t("address_required")),
  });
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    price: "",
    address: "",
  };
  //Helpers
  const handleFormSubmit = (values) => {
    console.log("FORM DATA SALES ADD 💃", values);
  };
  return (
    <Box p={4}>
      <Typography variant="h3">{t("add_new_sales")}</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={schema}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          errors,
          handleChange,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              pt={2}
              display="grid"
              gap={"20px"}
              gridTemplateColumns={"repeat(4,1fr)"}
              justifySelf={"center"}
            >
              <TextField
                type="text"
                variant="outlined"
                label={t("name")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                color="success"
                sx={{}}
              />
              <TextField
                type="number"
                variant="outlined"
                label={t("phone")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                color="success"
              />
              <TextField
                type="text"
                variant="outlined"
                label={t("email")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                color="success"
              />
              <TextField
                type="number"
                variant="outlined"
                label={t("price")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                color="success"
              />
              <TextField
                type="text"
                variant="outlined"
                label={t("address")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                color="success"
              />
            </Box>
            <FormButtons />
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SalesAdd;
