import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddDetails = ({ open, onClose, onSubmit, initialValues }) => {
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    brand: Yup.string().required('Brand is required'),
    title: Yup.string().required('Title is required'),
    category: Yup.string().required('Category is required'),
    price: Yup.string().required('Price is required'),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true, // This allows formik to reinitialize when initialValues change
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
      onClose(); // Close the modal after submitting
    },
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography variant="h6" gutterBottom>{initialValues.id ? 'Edit Product' : 'Add New Product'}</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Brand"
            name="brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            margin="normal"
            error={formik.touched.brand && Boolean(formik.errors.brand)}
            helperText={formik.touched.brand && formik.errors.brand}
          />
          <TextField
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            margin="normal"
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            label="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            margin="normal"
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
          />
          <TextField
            label="Price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            margin="normal"
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddDetails;
