import React, { Fragment } from 'react';
// import Button from '@mui/material/Button';
// or
import { Box, TextField, Button } from '@mui/material';

function App() {
  return (
    <Fragment>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="name" label="Name" variant="outlined" />
        <TextField id="email" label="Email" variant="outlined" type='email' />
        <TextField id="password" label="Password" variant="outlined" type='password' />
        <TextField id="mobile" label="Mobile" variant="outlined"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

      </Box>
      <div>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </Fragment>
  );
}

export default App;
