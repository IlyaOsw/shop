import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import PublicIcon from "@mui/icons-material/Public";

import i18n from "../../i18n";
import { Locales } from "../../types/types";

const changeLanguage = (language: Locales): void => {
  i18n.changeLanguage(language);
};

const options: { id: number; label: Locales }[] = [
  { id: 0, label: Locales.EN },
  { id: 1, label: Locales.RU },
  { id: 2, label: Locales.EE },
];

export const LanguageToggle: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    changeLanguage(options[0].label);
  }, []);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    changeLanguage(options[index].label);
  };

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        sx={{ borderRadius: "25px" }}
        color="info"
      >
        <Button
          onClick={handleToggle}
          sx={{ height: "36px", borderRadius: "25px" }}
        >
          {t(options[selectedIndex].label)}
          <PublicIcon sx={{ ml: "5px" }} />
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper
              sx={{
                zIndex: 1,
                width: "155px",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((lang) => (
                    <MenuItem
                      key={lang.id}
                      selected={lang.id === selectedIndex}
                      onClick={(
                        event: React.MouseEvent<HTMLLIElement, MouseEvent>
                      ) => {
                        handleMenuItemClick(event, lang.id);
                      }}
                    >
                      <img
                        alt={lang.label}
                        src={`${process.env.PUBLIC_URL}/Images/LanguageIcons/${lang.label}.png`}
                        style={{ marginRight: "10px", padding: "1px" }}
                      />
                      {t(lang.label)}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
