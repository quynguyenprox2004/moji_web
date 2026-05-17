import Box from '@mui/material/Box'
import { ReactComponent as MojiIcon } from '~/assets/moji.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import Profiles from './Menus/Profiles'
import ModeSelect from '~/components/ModeSelect/ModeSelect'

// import theme from '../../theme'

function AppBar() {

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.moji.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {/* <AppsIcon sx={{ color: 'white' }} /> */}
        {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}> */}
        <SvgIcon component={MojiIcon} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
        <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>Moji</Typography>
        {/* </Box> */}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <ModeSelect />
        <Tooltip title="Help">
          <HelpOutlineOutlinedIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
