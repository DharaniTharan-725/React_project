import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function MaterialCard() {
 return (
 <Card>
 <CardContent>
 <Typography variant="h5">Card Title</Typography>
 <Typography variant="body2">Card Content</Typography>
 </CardContent>
 </Card>
 );
}