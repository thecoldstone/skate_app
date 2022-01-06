import React from 'react';
import { Alert as Alrt, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAlertContext } from './AppContext';

function Alert() {
    const {text, severity, visible, setVisible} = useAlertContext();

    return(
        <Collapse in={visible} style={{position: "fixed", zIndex: "100", bottom: "0"}}>
                    <Alrt
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setVisible(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        severity={severity}
                        sx={{ mb: 2 }}
                    >
                        {text}
                    </Alrt>
        </Collapse>
    )
};

export default Alert;