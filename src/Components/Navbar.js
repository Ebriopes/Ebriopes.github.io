import React from 'react';
import { AppBar, makeStyles, Toolbar, ButtonGroup, Button } from "@material-ui/core";

const drawerWidth = 56;

const useStyles = makeStyles((theme) => ({
	appBar: {
		width: `calc(100vw - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		boxShadow: "none",
		color: "white"
	},
	title: {
		flexGrow: 1,
	},
	btns: {
		'& > *': {
			color: "sky",
		}
	}
}));


const Navbar = () => {
	const classes = useStyles();

	return (
		<AppBar color="transparent" className={classes.appBar}>
			<Toolbar>
				<h1 className={classes.title}>Dan</h1>
				<ButtonGroup variant="text" className={classes.btns}>
					<Button>Home</Button>
					<Button>About</Button>
					<Button>Skills</Button>
					<Button>Portafolio</Button>
					<Button>Contact Me</Button>
				</ButtonGroup>
			</Toolbar>
		</AppBar>
	)
}
export default Navbar;