import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
// import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <>
      <div>trungquandev</div>
      <Typography variant="body2" color="text.secondary">Test Typography</Typography>

      <Button variant="text">Hello world</Button>
      <Button variant="contained">Hello world</Button>
      <Button variant="outlined">Hello world</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <HomeIcon color="primary" />
    </>
  )
}

export default App
