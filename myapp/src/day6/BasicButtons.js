// import * as React from 'react'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export default function BasicButtons()
// {
//    return(
//     <Stack spacing ={2} directions="row">
// <Button variant="text">Text</Button>
// <Button variant="contained">Submit</Button>
// <Button variant="outlined">Check</Button>
// </Stack>
//    );
// }
// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// export default function BasicButtons() {
//   return (
//     <div>
//       <Checkbox {...label} defaultChecked />
//       <Checkbox {...label} />
//       <Checkbox {...label} disabled />
//       <Checkbox {...label} disabled checked />
//     </div>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';

// export default function BasicButtons() {
//   return (
//     <Box sx={{ '& > :not(style)': { m: 1 } }}>
//       <Fab color="primary" aria-label="add">
//         <AddIcon />
//       </Fab>
//       <Fab color="secondary" aria-label="edit">
//         <EditIcon />
//       </Fab>
//       <Fab variant="extended">
//         <NavigationIcon sx={{ mr: 1 }} />
//         Navigate
//       </Fab>
//       <Fab disabled aria-label="like">
//         <FavoriteIcon />
//       </Fab>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicButtons() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}