import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} sx={{
          height: "15px"
        }}/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel({value}) {
  const [progress, setProgress] = React.useState(0);
  const progressRef = React.useRef('#about'); // Reference for the element

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = value / 100 * 5;  // Smooth transition rate
        return Math.min(oldProgress + diff, value);  // Ensure progress never exceeds the given value
      });
    }, 150);  // Adjust speed of transition

    return () => {
      clearInterval(timer);
    };
  },[value]);
  return (
    // <Box sx={{ width: '100%' }}>
    //   <LinearProgressWithLabel value={value} />
    // </Box>
    <Box sx={{ width: '100%' }}>
    <LinearProgressWithLabel value={progress} />
  </Box>
  );
}
