import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useTranslation } from "react-i18next";
import CloseButton from "../CloseButton/CloseButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .02)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function HelpButton() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleOpen = () => setOpen(true);

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="FAQ" arrow>
        <IconButton aria-label="homeicon" size="large" onClick={handleOpen}>
          <HelpIcon fontSize="large" color="action" />
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        TransitionComponent={Transition}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ p: 2 }}>
          <CloseButton onClose={handleClose} />
        </Box>
        <Typography variant="h5" sx={{ mt: 2, textAlign: "center" }}>
          {t("faq")}
        </Typography>
        <Divider sx={{ m: 2 }} />
        <DialogContent>
          <Accordion
            sx={{ mt: 3 }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{t("Faq1question")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{t("Faq1answer")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>{t("Faq2question")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{t("Faq2answer")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>{t("Faq3question")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{t("Faq3answer")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography>{t("Faq4question")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{t("Faq4answer")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography>{t("Faq5question")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{t("Faq5answer")}</Typography>
            </AccordionDetails>
          </Accordion>
        </DialogContent>
      </Dialog>
    </>
  );
}
