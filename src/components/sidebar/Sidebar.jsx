import useMediaQuery from "@material-ui/core/useMediaQuery";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";
import useStyles from "./style";

const Sidebar = ({ data }) => {
	const matches = useMediaQuery("(max-width:600px)");
	const classes = useStyles();
	return (
		<div className={matches ? classes.root_full_width : classes.root}>
			<div className={classes.user_info}>
				<div className={classes.user_name}>
					<h2>{data.first_name}</h2>
					<h2>{data.last_name}</h2>
				</div>

				<h6>{data.title}</h6>
			</div>
			<div className={classes.user_contact}>
				<div className={classes.contact}>
					<PhoneAndroidIcon />
					<p>{data.contact.phone}</p>
				</div>
				<div className={classes.contact}>
					<MailOutlineIcon />
					<p>{data.contact.email}</p>
				</div>
				<div className={classes.contact}>
					<HomeIcon />
					<p>{data.contact.home_address}</p>
				</div>
				<div className={classes.contact}>
					<LinkedInIcon />
					<p>{data.contact.linkedin}</p>
				</div>
			</div>
			<div className={classes.sidebar_section}>
				<h2>Summary</h2>
				<div className={classes.sidebar_section_content}>
					<p className={classes.summary_content}>{data.summary}</p>
				</div>
			</div>
			{/* <div className={classes.sidebar_section}>
				<h2>Personal Skills</h2>
				<div className={classes.sidebar_section_content}>
					{data.key_skills.map((skill, index) => (
						<p className={classes.skill_item} key={index}>
							<FiberManualRecordIcon />
							{skill}
						</p>
					))}
				</div>
			</div> */}
			<div className={classes.sidebar_section}>
				<h2>Technical Skills</h2>
				<div className={classes.sidebar_section_content}>
					{data.techinical_skills.map((skill, index) => (
						<p className={classes.skill_item} key={index}>
							<FiberManualRecordIcon />
							{' '} 
							{skill}
						</p>
					))}
				</div>
			</div>
			<div className={classes.sidebar_section}>
				<h2>Interests 	&amp; Hobbies</h2>
				<div className={classes.sidebar_section_content}>
					{data.hobbies_interests.map((skill, index) => (
						<p className={classes.skill_item} key={index}>
							<FiberManualRecordIcon/>
							 {' '} 
							 {skill}

						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
