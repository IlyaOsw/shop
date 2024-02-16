import * as React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  Tooltip,
  Dialog,
  DialogContent,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import HelpIcon from "@mui/icons-material/Help";
import { styled } from "@mui/material/styles";

import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

import { TransitionProps } from "@mui/material/transitions";

import { CloseButton } from "../CloseButton/CloseButton";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

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

export const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>("");
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
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
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {t("faq")}
        </Typography>
        <Divider sx={{ m: 2 }} />
        <DialogContent>
          <Accordion
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
};
