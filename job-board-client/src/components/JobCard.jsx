import React from 'react';
import { Typography, Card, CardContent, Button, CardActions} from '@mui/material';

const JobCard = ({ job }) => {
    console.log('job', job);
    return (
        <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 8px #1976d2',
            p: 2,
            mt: 3,
            }}>
            <CardContent>
                <Typography variant='h5' component='div'>
                    {job.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='textSecondary'>
                    {job.company_name} - {job.location}
                </Typography>
                <Typography variant='body2'>
                    {job.description.slice(0,150)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={{ 
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        '&-hover': {
                            backgroundColor: '#1565c0',
                        },
                        width: '100%'
                     }}
                     size='small' href={job.share_link}>
                    Apply
                </Button>
            </CardActions>
        </Card>
    )
};

export default JobCard;