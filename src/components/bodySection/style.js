import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: '40px',
    borderBottom: '1px dashed  #F0B338',
    paddingBottom: '20px',
  },
  body_section_header:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  company_name:{
    color: 'green',
    fontSize: '1rem',
    fontWeight: 600,
  },
  company_add:{
    fontSize: '1rem',

  },
  post_title:{
    padding: '10px 0',
  },
  date_container:{
    paddingBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    "&>.MuiSvgIcon-root":{
      fontSize: '1.3rem',
      marginRight: '5px'
    }
  },
  role_container:{

  },
  sub_role:{
    display: 'flex',
    
    paddingLeft: '40px',
    "&>.MuiSvgIcon-root":{
      fontSize: '.7rem',
      fontWeight: 600,
      marginRight: '5px',
      marginTop: '7px',
    }
  },
  role_main:{
    padding: '5px 0',
    display: 'flex',
    marginBottom: '7px',
    marginTop: '15px',
 
    "&>.MuiSvgIcon-root":{
      fontSize: '.7rem',
      fontWeight: 600,
      marginRight: '5px',
      marginTop: '7px',
    }
  },
  short_desc:{
    paddingBottom: '15px',
  },
  single_sub_role:{
    marginTop: '30px',
  },
  sub_role_main_title:{
   paddingTop: '20px'
  }

})

export default useStyles