import React from 'react';
import { Drawer, Link, List, ListItem, makeStyles } from '@material-ui/core';
import { Facebook, GitHub, Instagram, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	drawer: {
		flexShrink: 0,
	},
	drawerPaper: {
		backgroundColor: "#000",
	},
	list: {
		marginTop: 'auto',
		marginBottom: 'auto',
	}
}))

const LDrawer = () => {
	const classes = useStyles();
	return (
		<Drawer
			variant="permanent"
			className={classes.drawer}
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<List className={classes.list} >
				<ListItem button text="Facebook">
					<Link href="https://facebook.com/Ebriopes" target="_blank">
						<Facebook color="secondary"/>
					</Link>
				</ListItem>
				<ListItem button text="Instagram">
					<Link href="https://instagram.com/Ebriopes" target="_blank">
						<Instagram color="secondary"/>
					</Link>
				</ListItem>
				<ListItem button text="GitHub">
					<Link href="https://github.com/Ebriopes" target="_blank">
						<GitHub color="secondary"/>
					</Link>
				</ListItem>
				<ListItem button text="LinkedIn">
					<Link href="https://linkedin.com/in/danielavargasr" target="_blank">
						<LinkedIn color="secondary"/>
					</Link>
				</ListItem>
			</List>
		</Drawer>
	)
}

export default LDrawer;