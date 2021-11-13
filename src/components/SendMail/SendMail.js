import React from "react";
import "./sendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button, IconButton } from "@material-ui/core";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LinkIcon from "@material-ui/icons/Link";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMasseage } from "../../features/mail/mailSlice";

const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h5>New Message</h5>
        <IconButton size="small" onClick={() => dispatch(closeSendMasseage())}>
          <CloseIcon className="close-icon" fontSize="small"></CloseIcon>
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="mail"
          placeholder="Recipient"
          {...register("recipient", { required: true })}
        />
        {errors.recipient && (
          <p className="sendMail__error">Recipient Email is required</p>
        )}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )}
        <textarea
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="sendMail__error">Body is required</p>}
        <div className="sendmail__options">
          <div className="sendMail__option__left">
            <Button type="submit" variant="contained" className="sendMail__btn">
              Send
            </Button>
            <IconButton size="small">
              <FormatColorTextIcon fontSize="small" className="option-btn" />
            </IconButton>
            <IconButton size="small">
              <AttachFileIcon fontSize="small" className="option-btn" />
            </IconButton>
            <IconButton size="small">
              <LinkIcon fontSize="small" className="option-btn" />
            </IconButton>
            <IconButton size="small">
              <InsertEmoticonIcon fontSize="small" className="option-btn" />
            </IconButton>
            <IconButton size="small">
              <PhotoSizeSelectActualIcon
                fontSize="small"
                className="option-btn"
              />
            </IconButton>
          </div>
          <div className="sendMail__option__right">
            <IconButton size="small">
              <MoreVertIcon fontSize="small" className="option-btn" />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon fontSize="small" className="option-btn" />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
