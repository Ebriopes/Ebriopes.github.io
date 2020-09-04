import React from 'react';
import LDrawer from '../Components/LDrawer';
import Navbar from '../Components/Navbar';
import { makeStyles, CssBaseline } from '@material-ui/core';
import bkg from '../images/fondo.png';

const drawerW = '56px'

const useStyles = makeStyles((theme) => ({
	content: {
		height: '100vh',
		width: `calc(100vw - ${drawerW})`,
		marginLeft: drawerW,
		flexGrow: 1,
		backgroundImage: `url(${bkg})`,
	},
}));

const Landing = () => {
	const classes = useStyles();

	return (
		<div>
			<CssBaseline/>
			<LDrawer />
			<Navbar/>
			<main className={classes.content}>

			</main>
		</div>
	)
} 

export default Landing;