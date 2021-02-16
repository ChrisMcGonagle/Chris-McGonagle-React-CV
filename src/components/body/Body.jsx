import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import BodySection from "../bodySection/BodySection";
import EducationSection from "../educationSection/EducationSection";
import useStyles from "./style";

const Body = ({ data }) => {
	const matches = useMediaQuery("(max-width:600px)");
	console.log(matches);
	const classes = useStyles();
	return (
		<div className={matches ? classes.root_full_width : classes.root}>
			<h2 className={classes.header_top}>PROFESSIONAL EXPERIENCE</h2>
			<BodySection data={data.current_employment} />
			{data.previous_employment.map((previous_employment_data, ind) => (
				<BodySection key={ind} data={previous_employment_data} />
			))}
			<div className={classes.education_section}>
				<h2 className={classes.header_top}>Education</h2>
				{data.education.map((item, ind) => (
					<EducationSection edu_data={item} key={ind} />
				))}
			</div>
		</div>
	);
};

export default Body;
