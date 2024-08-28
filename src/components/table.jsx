import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Pagination } from '@mui/material';
import { Button, TextField, Grid} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AddDetails from '../components/addProduct';
import DeleteIcon from '@mui/icons-material/Delete';
import { addProduct, editProduct, deleteProduct } from '../redux_slices/productslice';

const BasicTable = () => {

  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);
  const [productList, setProductlist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm,  setSearchitem] = useState('')
  const [page, setPage] = useState(1); // State for current page
  const rowsPerPage = 3; // State for rows per page

  const products = useSelector((state) => state.products.items);
  
  // console.log("products:", products);
  // console.log("productlist",productList)

  useEffect(()=>{
    if(products) {
      setProductlist(products)
    }
  },[products]);

  const handleAddProduct = (newProduct) => {
    dispatch(addProduct(newProduct));
    console.log("handleaddproduct", newProduct);
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

  const handleSearchChange = (event)=>{
    setSearchitem(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    console.log("value",value);
  };;


  const filteredProducts = productList.filter((product) =>
    // product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price.toString().includes(searchTerm)
  );

  // Paginate the filtered products
  const paginatedProducts = filteredProducts.slice((page - 1) * rowsPerPage, page * rowsPerPage);



  if (!products) {
    return <Typography variant="h6" color="error">No data available.</Typography>;
  }

  return (
    
    <>
    <Typography align='right' m={0}>
        <Grid container spacing={3}  >
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={3} md={2}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              margin="normal"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by title, description, or price"
            />
          </Grid>
          <Grid item xs={3} md={2} >
            <Button variant="contained" sx={{ justifyContent: "flex-end", m:1, padding:2 }} color="primary" onClick={() => handleOpenModal()}>
              Add Product
            </Button>
          </Grid>
        </Grid>
    </Typography>
      <AddDetails 
        open={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={editingProduct ? handleEditProduct : handleAddProduct} 
        initialValues={editingProduct || { brand: '', title: '', category: '', price: '' }}
      />
    <TableContainer sx={{ mt: 2 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'><Typography variant="h5" gutterBottom>Brand</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>Title</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>category</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>Price</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>Action</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {paginatedProducts.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{product.brand}</TableCell>
              <TableCell align="center">{product.title}</TableCell>
              <TableCell align="center">{product.category}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" id={product.id} onClick={() => handleOpenModal(product)} >Edit</Button>
                <Button variant="outlined" id={product.id} startIcon={<DeleteIcon />} color="error" onClick={() => handleDeleteProduct(product.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={Math.ceil(filteredProducts.length / rowsPerPage)} // Total number of pages
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ mt: 2, display: 'flex', justifyContent: 'center' }} // Centering the pagination
      />
    </TableContainer>
    
    </>
  );
};

export default BasicTable;
