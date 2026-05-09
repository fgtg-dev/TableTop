import Box from '@mui/material/Box';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

type CellProps = {
    transform: string;
    isMarked?: boolean;
    shouldAnimate: boolean;
}

export default function Cell({ transform, isMarked, shouldAnimate }: CellProps) {
    const commonStyles = {
        bgcolor: 'background.paper',
        border: 1,
        width: '5rem',
        height: '5rem',
        borderColor: 'primary.main'
    };

    const markerStyles = {
        color: 'primary.main',
        fontSize: '4rem'
    };

    return (
        <>
            <Box sx={{ ...commonStyles }}>
                <div style={{ 
                        transform,
                         transition: shouldAnimate
                            ? 'transform 300ms ease'
                            : 'none',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                    {isMarked && <ArrowCircleUpRoundedIcon sx={markerStyles} />}
                </div>
            </Box>
        </>
    );
}
