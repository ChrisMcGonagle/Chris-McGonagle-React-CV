import DateRangeIcon from "@material-ui/icons/DateRange";
import React from "react";
import useStyles from "./style";
const EducationSection = ({ edu_data }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2 className={classes.degree}>{edu_data.degree}</h2>
			<h6 className={classes.institute}>{edu_data.institute}</h6>

			<p className={classes.date_container}>
				<DateRangeIcon />
				<p>{edu_data.duration}</p>
			</p>
			<p className={classes.education_short_des}>{edu_data.short_des}</p>
		</div>
	);
};

export default EducationSection;
