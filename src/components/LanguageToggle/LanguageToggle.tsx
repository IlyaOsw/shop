import * as React from "react";
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

enum Locales {
  EN = "en",
  EE = "ee",
  RU = "ru",
}
const changeLanguage = (language: Locales): void => {
  i18n.changeLanguage(language);
};
const options: { id: number; label: Locales }[] = [
  { id: 0, label: Locales.EN },
  { id: 1, label: Locales.RU },
  { id: 2, label: Locales.EE },
];
export const LanguageToggle: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
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
        aria-label="split button"
        color="info"
      >
        <Button>{t(options[selectedIndex].label)}</Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <PublicIcon />
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 2,
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
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((lang) => (
                    <MenuItem
                      key={lang.id}
                      selected={lang.id === selectedIndex}
                      onClick={(event) => {
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
});
