import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';

function generate(element) {
  return [0, 1, 2, 3, 4].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            User List
          </Typography>
            <List dense={dense}>
                {generate(
                <ListItem
                    secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon style={{color: '#ec483e'}}/>
                    </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Fingerprint style={{color: '#ec483e'}} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="List Item"
                    secondary={secondary ? 'Secondary text' : null}
                    />
                </ListItem>,
                )}
            </List>
        </Grid>
      </Grid>
    </Box>
  );
}
