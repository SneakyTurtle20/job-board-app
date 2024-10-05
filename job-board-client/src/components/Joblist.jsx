import React from 'react';
import { Typography, Grid2, CircularProgress, Box} from '@mui/material';
import { WorkOutline } from '@mui/icons-material';
import JobCard from './JobCard'

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