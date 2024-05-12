import React from 'react';
import { AppBar, Toolbar, Typography , Button , Link ,Grid} from '@material-ui/core';

const LoginAppBar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1 , color :"navy" }}>Nexumus</Typography>
        <Grid container alignItems="center" justifyContent="center" spacing={3}>
          <Grid item>
            <Button color="primary" component={Link} href="#" style={{ color: '#000' }}>Home</Button>
          </Grid>
          <Grid item>
            <Button color="primary" component={Link} href="#" style={{ color: '#000' }}>About</Button>
          </Grid>
          <Grid item>
            <Button color="primary" component={Link} href="#" style={{ color: '#000' }}>For You</Button>
          </Grid>
          <Grid item>
            <Button color="primary" component={Link} href="#" style={{ color: '#000' }}>For partners</Button>
          </Grid>
          <Grid item>
            <Button color="primary" component={Link} href="#" style={{ color: '#000' }}>Get in touch</Button>
          </Grid>
          <Grid item>
            <Button color="primary" component={Link} href="#" style={{ color: '#000' }} >Market Place</Button>
          </Grid>
          <Grid item>
            <Typography variant="h8" style={{ color: "navy", fontWeight: 'bold' }}>My account</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" sx={{ mt: 2 , bgcolor: 'navy' }}>Create Your Product</Button>
          </Grid>
        </Grid>
       
      </Toolbar>
    </AppBar>
  );
};

export default LoginAppBar;
