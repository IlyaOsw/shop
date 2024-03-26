import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState<string | false>("");
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const faqData: { id: string; question: string; answer: string }[] = [
    { id: "panel1", question: "Faq1question", answer: "Faq1answer" },
    { id: "panel2", question: "Faq2question", answer: "Faq2answer" },
    { id: "panel3", question: "Faq3question", answer: "Faq3answer" },
    { id: "panel4", question: "Faq4question", answer: "Faq4answer" },
    { id: "panel5", question: "Faq5question", answer: "Faq5answer" },
  ];

  return (
    <>
      <Tooltip title="FAQ" arrow>
        <IconButton onClick={handleOpen} style={{ color: "#ffffff" }}>
          <HelpIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        TransitionComponent={Transition}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ p: 2 }}>
          <CloseButton onClose={handleClose} />
        </Box>
        <Typography variant="h5" align="center">
          {t("faq")}
        </Typography>
        <Divider sx={{ m: 2 }} />
        <Typography variant="body1" align="center" sx={{ p: 2 }}>
          {t("FAQinfo")}
        </Typography>
        <DialogContent>
          {faqData.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
            >
              <AccordionSummary id={`${faq.id}-header`}>
                <Typography>{t(faq.question)}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{t(faq.answer)}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};
