import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: '10px 0'
   
  },
  degree:{
    fontSize: '1.2rem'
  },
  institute:{
    fontSize: '1rem',
    color: '#52063a',
    padding: '5px 0'
  },
  date_container:{
    padding: '5px 0',
    display: 'flex',
    alignItems: 'center',
    "&>.MuiSvgIcon-root":{
      fontSize: '1.3rem',
      marginRight: '5px'
    }
  },
  education_short_des:{
    fontSize: '1rem',
    paddingTop: '5px'
  }
})

export default useStyles