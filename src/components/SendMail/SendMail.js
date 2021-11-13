import React, { useState } from "react";
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
import MinimizeIcon from "@material-ui/icons/Minimize";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSendMasseage,
  minimizeSendMasseage,
  openSendMasseage,
  selectSendMessagePopup,
} from "../../features/mail/mailSlice";

const SendMail = () => {
  const [recipientHolder, setRecipientHolder] = useState("Recipient");
  const dispatch = useDispatch();
  const sendMessagePopup = useSelector(selectSendMessagePopup);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle form data
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div
      className={`sendMail ${sendMessagePopup === "minimize" && "minimize"}`}
    >
      <div className="sendMail__header">
        <h5 onClick={() => dispatch(openSendMasseage())}>New Message</h5>
        <div>
          <IconButton
            size="small"
            onClick={() => dispatch(minimizeSendMasseage())}
          >
            <MinimizeIcon className="close-icon header-icon" fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => dispatch(closeSendMasseage())}
          >
            <CloseIcon className="close-icon header-icon" fontSize="small" />
          </IconButton>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="mail"
          placeholder={recipientHolder}
          onFocus={() => setRecipientHolder("To")}
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
