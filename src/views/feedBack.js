import { Button, Typography } from '@mui/material';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useNavigate } from 'react-router';
const FeedBack = ({title, message, disableTopup, purchasePin, goHome, showAlert, setshowAlert, showErrorAlert, setshowErrorAlert }) => {
    const navigate = useNavigate();
    const onClickSuccess = (setshowAlert, goHome) => {
        setshowAlert((prevAlert) => !prevAlert);
        if (goHome) {
            navigate('/');
        }
    };
    const onClickFailure = () => {
        setshowErrorAlert(false);
    };

    const SuccessFullAlert = ({title, message }) => {
        return (
            <SweetAlert
        
                  type= {title ? "info": "success"}
                title= {title || "Successful!"}
                show={showAlert}
                onConfirm={() => onClickSuccess(setshowAlert, goHome)}
                onCancel={() => setshowAlert(false)}
                customButtons={
                    <>
                        <Button fullWidth onClick={() => onClickSuccess(setshowAlert, goHome)} variant="contained" color="primary">
                            Ok
                        </Button>
                    </>
                }
            >
                <br/>
                <Typography variant="subtitle1">{message}</Typography>
                {purchasePin && <Typography variant="subtitle1">{purchasePin}</Typography>}
            </SweetAlert>
        );
    };
    const FailureAlert = ({ message }) => {
        return (
            <SweetAlert
                danger
                show={showErrorAlert}
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"
                title="Failed"
                onConfirm={onClickFailure}
                onCancel={onClickFailure}
                focusCancelBtn
                customButtons={
                    <>
                        <Button onClick={onClickFailure} sx={{ mr: 2 }} variant="contained" color="primary">
                            Ok
                        </Button>
                        {/* {!disableTopup && (
                            <Button onClick={() => navigate('/fund-wallet')} variant="contained" color="primary">
                                Top up now
                            </Button>
                        )} */}
                    </>
                }
            >
                {message}
            </SweetAlert>
        );
    };

    if (showAlert) {
        return <SuccessFullAlert title={title} message={message} />;
    } else if (showErrorAlert) {
        return <FailureAlert message={message} />;
    } else {
        return '';
    }
};

export default FeedBack;
