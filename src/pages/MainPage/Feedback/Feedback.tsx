import React from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

import { CommentForm } from "./CommentForm/CommentForm";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.grey[400],
  },
}));
const labels: { [index: string]: string } = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

const IconContainer = (props: IconContainerProps) => {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
};

const getLabelText = (value: number) => {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
};

export default function MainFeedback() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState<number | null>(5);
  const [hover, setHover] = React.useState(-1);
  const [active, setActive] = React.useState(false);

  const commentHandler = () => {
    window.scroll({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setActive(true);
  };

  return (
    <Box
      sx={{
        mt: 10,
        mb: 5,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          paddingBottom: "20px",
        }}
      >
        {t("feedback")}
      </Typography>
      <StyledRating
        name="highlight-selected-only"
        value={value}
        defaultValue={5}
        IconContainerComponent={IconContainer}
        getLabelText={getLabelText}
        highlightSelectedOnly
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        onClick={commentHandler}
      />
      {value !== null && <Box>{labels[hover !== -1 ? hover : value]}</Box>}
      {active && <CommentForm />}
    </Box>
  );
}
