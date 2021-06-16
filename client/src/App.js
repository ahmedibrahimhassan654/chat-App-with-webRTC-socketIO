import React from 'react';

import { Typography, AppBar } from '@material-ui/core';
import { typography } from '@material-ui/system';

const App = () => {
	return (
		<div>
			<AppBar position="static" color="inherit">
				<typography variant="h2" align="center">
					video chat
				</typography>
			</AppBar>
			{/* {video player} */}
			{/* {Options Notificatio} */}
		</div>
	);
};

export default App;
