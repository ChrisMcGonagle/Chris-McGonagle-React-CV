import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flex: .7,
    backgroundColor: '#FFFFFF',
    padding: '20px',
    color: '#323232',
    paddingTop: '50px'
  },
  root_full_width:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '20px',
    color: '#323232',
    paddingTop: '50px'
  },
  header_top:{
    textTransform: 'uppercase',
    borderBottom: '1px solid #F0B338',
    paddingBottom: '8px',
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  education_section:{
    marginTop: '40px',
  }

})

export default useStyles