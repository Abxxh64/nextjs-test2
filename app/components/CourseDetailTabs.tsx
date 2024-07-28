'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Instructor } from '../types/Instructor';
import { Typography, Avatar, List, ListItem, ListItemAvatar } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type CourseDetailTabsProps = {
  description: string;
  content: {content: string, id: string}[];
  instructors: Instructor[];
}


export default function CourseDetailTabs({description, content, instructors}: CourseDetailTabsProps) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} 
        indicatorColor='secondary' textColor='secondary'>
          <Tab label="Description" disableRipple sx={{textTransform: 'none', fontSize:'1rem'}} {...a11yProps(0)} />
          <Tab label="Course Content" disableRipple sx={{textTransform: 'none', fontSize:'1rem'}} {...a11yProps(1)} />
          <Tab label="Instructors" disableRipple sx={{textTransform: 'none', fontSize:'1rem'}} {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Typography fontSize={'1rem'} color='black'>
          {description}
        </Typography>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <List sx={{ listStyleType: 'disc', paddingLeft: 2 }}>
          {content.length > 0 ? (
            content.map((item, index) => (
              <ListItem key={index} sx={{ display: 'list-item' }}>
                <Typography variant='body1' color='text.secondary'>
                  {item.content}
                </Typography>
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary">
              No content available.
            </Typography>
          )}
        
        </List>
    
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>

        <List>
          {instructors && instructors.length > 0 ? (
            instructors.map((item, index) => (
              <ListItem key={index} >
                <ListItemAvatar>
                <Avatar alt="instructor-pic" src= {item.profileImage? item.profileImage.url : "/default-profile-pic.png" } />
                </ListItemAvatar>
                <Typography fontSize={'1rem'} color='black'>
                  {item.instructorName}
                </Typography>
              </ListItem>
             ))

          ) : (
            <Typography variant="body1" color="text.secondary">
                No instructors available.
            </Typography>
          )}
          
        </List>

      </CustomTabPanel>

    </Box>
  );
}