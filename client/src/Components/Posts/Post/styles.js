import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../../styleConstants'

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: COLORS.colorTextSecondary
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: COLORS.colorTextSecondary
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: COLORS.colorTextSecondary
  },
  grid: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px'
  },
  title: {
    padding: '0 16px'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  likeDeleteButton: {
    color: COLORS.colorButton
  }
});