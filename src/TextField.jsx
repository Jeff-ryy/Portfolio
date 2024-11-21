


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function FullWidthTextField() {
//   return (
//     <Box sx={{ width: 500, maxWidth: '100%' }}>
//       <TextField fullWidth label="fullWidth" id="fullWidth" />
//     </Box>
//   );
// }






import React, { useState } from 'react';

function FullWidthTextField(props) {
    const { } = props
    return (
        <div className="w-full px-4">
            <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">
            </label>
            <input
                type="text"
                id="inputField"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                {...props}
            />
        </div>
    );
}

export default FullWidthTextField;
