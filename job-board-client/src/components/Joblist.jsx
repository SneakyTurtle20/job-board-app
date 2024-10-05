import React from 'react';
import { Typography, Grid2, CircularProgress, Box, Card, CardContent, Button, CardActions} from '@mui/material';
import { WorkOutline } from '@mui/icons-material';

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

const JobList = ({ jobs, loading }) => {

    if (loading) {
        return (
            <Box display='flex' justifyContent='center' marginTop='20px'>
                <CircularProgress />
            </Box>
        )
    }

    if (jobs.length === 0) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' marginTop='20px'>
                <WorkOutline style={{ fontSize: 60, color: 'gray' }} />
                <Typography variant='h6' color='textSecondary'>
                    No jobs available
                </Typography>
            </Box>
        )
    }
    return (
        <Grid2 container display='grid' spacing={2}>
            {jobs.map(( job,index ) => (
               <Grid2 item key={index}>
                    <JobCard job={job} />
               </Grid2>
            ))}
        </Grid2>
    )
}

export default JobList;