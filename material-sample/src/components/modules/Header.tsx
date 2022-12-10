import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Header = () => {
  return (
    <AppBar position="relative" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Grid>
            <LocalPrintshopRoundedIcon></LocalPrintshopRoundedIcon>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="未入力あり表示" />
            </FormGroup>

            <Stack direction="row" spacing={1}>
                <IconButton aria-label="secondary">日</IconButton>
                <IconButton aria-label="secondary">週</IconButton>
                <IconButton aria-label="secondary">月</IconButton>
                <IconButton aria-label="secondary">
                <Button variant="contained"sx={{borderRedius:"50px"}}>週</Button>
                <CalendarMonthIcon></CalendarMonthIcon>
                今日を表示
                </IconButton>
            </Stack>
          </Grid>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
