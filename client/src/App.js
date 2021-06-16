import React from 'react';

import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options';
import Notifications from './components/Notifications';


const useStyles = makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 100px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		border: '2px solid black',
		[theme.breakpoints.down('sm')]: {
			width: '90%',
		},
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	},
	image: {
		marginLeft: '15px',
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
	},
}));

const App = () =>
{
    const classes=useStyles()
	return (
		<div className={classes.wrapper}>
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography variant="h2" align="center">
					video chat
					<br/>
						created By Ahmed Ibrahim 
				</Typography>
			</AppBar>
			<VideoPlayer/>
            <Options>
                <Notifications/>
            </Options>
		</div>
	);
};

export default App;
