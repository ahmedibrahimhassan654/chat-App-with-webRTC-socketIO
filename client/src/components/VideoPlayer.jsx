import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles, Button } from '@material-ui/core';
import {  Phone  } from '@material-ui/icons';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, shareScreen } = useContext(SocketContext);
  const classes = useStyles();

  return (
		<Grid container className={classes.gridContainer}>
			{stream && (
				<Paper className={classes.paper}>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							{name || 'Name'}
						</Typography>
						<video controls playsInline muted ref={myVideo} autoPlay className={classes.video} />
					</Grid>
				</Paper>
			)}
			{callAccepted && !callEnded && (
				<Paper className={classes.paper}>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							{call.name || 'Name'}
						</Typography>
						<video controls playsInline ref={userVideo} autoPlay className={classes.video} />
					</Grid>
					<Button
						variant="contained"
						color="primary"
						startIcon={<Phone fontSize="large" />}
						fullWidth
						onClick={shareScreen}
						className={classes.margin}
					>
					Share Screen
					</Button>
				</Paper>
			)}
		</Grid>
  );
};

export default VideoPlayer;
