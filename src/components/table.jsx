import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import AddDetails from '../components/addProduct';
import DeleteIcon from '@mui/icons-material/Delete';
import { addProduct, editProduct, deleteProduct } from '../redux_slices/productslice';

const BasicTable = () => {

  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);
  const [productList, setProductlist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = useSelector((state) => state.products.items);
  
  console.log("products:", products);
  console.log("productlist",productList)

  useEffect(()=>{
    if(products) {
      setProductlist(products)
    }
  },[products]);

  const handleAddProduct = (newProduct) => {
    dispatch(addProduct(newProduct));
    console.log("handleaddproduct");
  };

  const handleEditProduct = (updatedProduct) => {
    dispatch(editProduct({ id: editingProduct.id, updatedProduct }));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleOpenModal = (product = null) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };


  if (!products) {
    return <Typography variant="h6" color="error">No data available.</Typography>;
  }

  return (
    
    <>
    <Typography align='right' m={1}>
    <Button variant="contained" sx={{ justifyContent: "flex-end" }} color="primary" onClick={()=>handleOpenModal()}>
        Add Product
      </Button>
    </Typography>
    
      <AddDetails 
        open={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={editingProduct ? handleEditProduct : handleAddProduct} 
        initialValues={editingProduct || { brand: '', title: '', description: '', price: '' }}
      />
    <TableContainer sx={{ mt: 2 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'><Typography variant="h5" gutterBottom>Brand</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>Title</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>Description</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>Price</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>Action</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {productList.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{product.brand}</TableCell>
              <TableCell align="center">{product.title}</TableCell>
              <TableCell align="center">{product.description}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" id={product.id} onClick={() => handleOpenModal(product)} >Edit</Button>
                <Button variant="outlined" id={product.id} startIcon={<DeleteIcon />} color="error" onClick={() => handleDeleteProduct(product.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  );
};

export default BasicTable;
