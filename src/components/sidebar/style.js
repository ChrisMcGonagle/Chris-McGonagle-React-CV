import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flex: .3,
    padding: '20px',
    backgroundColor: '#2D3E50',
    color: '#ffffff'
  },
  root_full_width: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#2D3E50',
    color: '#ffffff'
  },
  user_name:{
    "&>h2":{
      fontSize: '3rem',
      color: '#29B6F6',
      textAlign: 'center',
      fontWeight: 400,
      margin: "0px 0px"
    }
  },
  user_info:{
    "&>h6":{
    
      fontSize: '20px',
      fontWeight: 400,
      textAlign: 'center',
      margin: '0',
      marginTop: '15px'
    }
  },
  user_contact:{
    marginTop: '20px',
    marginBottom: '40px'
  },
  contact:{
    display: 'flex',
    alignItems: 'center', 
    marginTop: '10px',
    "&>p":{
        marginLeft: '8px'
    },
    "&>.MuiSvgIcon-root":{
      fontSize: '1rem'
    }
  },
  sidebar_section:{
    marginTop: '40px',
    "&>h2":{
      textTransform: 'uppercase',
      borderBottom: '1px solid #fafafa',
      paddingBottom: '5px',
      fontSize: '1.3rem',
      fontWeight: 400,
    },

  },
  sidebar_section_content:{
    paddingTop: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  skill_item:{
    margin: '2px',
    fontWeight: 500,
    marginLeft: '5px',
    "&>.MuiSvgIcon-root":{
      fontSize: '.5rem',
      
    }
  },
  summary_content:{
    marginTop: '10px',
    textAlign: 'center',
    lineHeight: 1.5
    },
})

export default useStyles