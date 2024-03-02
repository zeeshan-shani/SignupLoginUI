import CircularProgress from '@mui/material/CircularProgress';
import { useMediaQuery } from '@mui/material';
function CircularProgressLoading() {
    const matches = useMediaQuery('(min-width:600px)');
    return <CircularProgress style={{marginTop:'5%', color: "#4F25C8", width: matches?'100px':'50px',height:matches?'100px':'50px'}} />;
}

export default CircularProgressLoading;