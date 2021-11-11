import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import CancelScheduleSendIcon from "@material-ui/icons/CancelScheduleSend";
import MailIcon from "@material-ui/icons/Mail";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";

export const SidebarItemsOptions = [
  {
    icon: InboxIcon,
    title: "Inbox",
    numbers: "50",
    active: true,
  },
  {
    icon: StarIcon,
    title: "Starred",
  },
  {
    icon: WatchLaterIcon,
    title: "Snoozed",
  },
  {
    icon: SendIcon,
    title: "Sent",
  },
  {
    icon: InsertDriveFileIcon,
    title: "Drafts",
    numbers: "10",
  },
  {
    icon: LabelImportantIcon,
    title: "Important",
  },
  {
    icon: CancelScheduleSendIcon,
    title: "Scheduled",
  },
  {
    icon: MailIcon,
    title: "All Mail",
  },
  {
    icon: ReportIcon,
    title: "Spam",
  },
  {
    icon: DeleteIcon,
    title: "Trash",
  },
  {
    icon: SettingsIcon,
    title: "Manage Label",
  },
];

export const MeetItems = [
  {
    icon: VideocamIcon,
    title: "New meeting",
  },
  {
    icon: KeyboardIcon,
    title: "Join a meeting",
  },
];
