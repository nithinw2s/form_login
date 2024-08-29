import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid, Rating, Divider, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

const ProductCard = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(8); // Start by showing 8 products

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Load 4 more products
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the products to display based on the visible count
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <Box>
      {/* Search Input */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 0, mt:2, mr:5 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: '300px' }}
          placeholder="Search by title or description"
        />
      </Box>

      {/* Product Cards */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {visibleProducts.map((card) => (
          <Card key={card.id} sx={{ display: 'flex', flexDirection: 'column', width: 300, borderRadius: 2, boxShadow: 3, m: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
              sx={{ objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1, maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0 }}>
                {card.category}
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="h6" color="text.primary">
                ${card.price.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2, // Adjust line clamping for description
                WebkitBoxOrient: 'vertical',
                maxHeight: '40px'
              }}>
                {card.description}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={card.rating.rate} readOnly precision={0.1} size="small" />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({card.rating.count})
                </Typography>
              </Box>
            </CardContent>
            <Grid container spacing={1} sx={{ px: 2, pb: 2 }}>
              <Grid item xs={6}>
                <Button fullWidth variant="outlined" color="primary">Add Cart</Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" color="primary">Learn More</Button>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Box>

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb:3 }}>
          <Button variant="contained" color="primary" onClick={handleLoadMore}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

// Usage example
export default function Card1() {
  const mycard = useSelector((state) => state.cardproducts.items);

  return (
    <Box>
      <ProductCard products={mycard} />
    </Box>
  );
}
