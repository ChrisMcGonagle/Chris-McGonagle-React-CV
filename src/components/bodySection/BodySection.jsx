import DateRangeIcon from "@material-ui/icons/DateRange";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import React from "react";
import useStyles from "./style";

const BodySection = ({ data }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.body_section}>
				<div className={classes.body_section_header}>
					<div className={classes.body_section_header_left}>
						<p className={classes.company_name}>{data.company_name}</p>
						<h3 className={classes.post_title}>{data.post}</h3>
					</div>
					<p className="company_add">{data.company_add}</p>
				</div>
				<p className={classes.date_container}>
					<DateRangeIcon />
					<p>{data.date}</p>
				</p>
				<p className={classes.short_desc}>{data.short_desc}</p>
			</div>
			<div className={classes.role_container}>
				{data.role.map((role_item, ind) => (
					<div key={ind} className={classes.single_role}>
						<p className={classes.role_main} key={ind}>
							<FiberManualRecordIcon />
							<span>{role_item.title}</span>
						</p>
						{role_item.subtitle.length > 0 &&
							role_item.subtitle.map((sub_role_item, ind) => (
								<p className={classes.sub_role} key={ind}>
									<RadioButtonUncheckedIcon />
									<span> {sub_role_item}</span>
								</p>
							))}
					</div>
				))}
				{data.sub_role && (
					<div className={classes.sub_role_container}>
						{data.sub_role.map((item, ind) => (
							<div key={ind} className={classes.single_sub_role}>
								<h4 className={classes.sub_role_main_title}>{item.title}</h4>
								{item.sub_role_info.map((single_sub_role_info, index) => (
									<div key={index} className={classes.role_container}>
										<p className={classes.role_main} key={index}>
											<FiberManualRecordIcon />
											<span>{single_sub_role_info.title}</span>
										</p>
										{single_sub_role_info.subtitle.map(
											(single_sub_role_info_subtitle, index) => (
												<p className={classes.sub_role} key={index}>
													<FiberManualRecordIcon />
													<span>{single_sub_role_info_subtitle}</span>
												</p>
											)
										)}
									</div>
								))}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default BodySection;
