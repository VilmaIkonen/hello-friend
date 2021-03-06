import { makeStyles } from '@material-ui/core/styles';
import { COLORS, FONTS } from '../../../Constants/styleConstants'

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
    borderRadius: '.3rem',
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    color: COLORS.colorTextSecondary
  },
  overlay2: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color: COLORS.colorTextSecondary    
  },
  grid: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem',
  },
  title: {
    padding: '0 1rem',
    fontFamily: FONTS.fontHeadingEmphasis   
  },
  message: {
    fontFamily: FONTS.fontText
  },
  cardActions: {
    padding: '0 1rem .5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  likeDeleteButton: {
    color: COLORS.colorButton
  }
});