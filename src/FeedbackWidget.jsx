import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Typography,
  Button,
  Fab,
} from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const fabStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 9999,
};

const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    console.log("Feedback Submitted:", feedback);
    setOpen(false);
    setFeedback("");
  };

  return (
    <>
      {/* Floating button */}
      <Fab
        color="primary"
        aria-label="feedback"
        sx={fabStyle}
        onClick={() => setOpen(true)}
      >
        <FeedbackIcon />
      </Fab>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h6">Your Feedback</Typography>
          <TextField
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
            fullWidth
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default FeedbackWidget;
