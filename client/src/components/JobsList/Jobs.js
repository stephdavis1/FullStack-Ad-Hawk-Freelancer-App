import React from 'react';
import Typography from '@material-ui/core/Typography';

import Job from '../JobsList/Job';

export default function Jobs({ jobs }){
    
    return (
        <div className="jobs">
            <Typography variant="h1">
                Entry Level Freelance jobs.
            </Typography>
            {
                jobs.map(
                    job => <Job job={job} />
                )
            }
        </div>
    )
}
