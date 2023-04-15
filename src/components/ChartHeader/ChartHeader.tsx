import { styled } from "@mui/material/styles";
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { selectCategory, selectLang } from "store/chartSlice";
import useAppSelector from "../../customHooks/useAppSelector";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import theme from "styles/theme";

const lang = [
  { value: "en", label: "english" },
  { value: "ar", label: "العربية" },
];

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

function ChartHeader() {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();
  const selectedCategory = useAppSelector((state) => state.chart.currentCategory);
  const selectedLang = useAppSelector((state) => state.chart.lang);
  const categories = useAppSelector((state) => state.chart.categories);

  const handleCategoryChange = useCallback((e: SelectChangeEvent) => {
    const value = e.target.value;
    const typeGuard = (tbd: any): tbd is backend.Category => {
      if (tbd as backend.Category) {
        return true;
      }
      return false;
    };

    if (typeGuard(value)) {
      dispatch(selectCategory(value));
    }
  }, []);

  const handleLangChange = useCallback((e: SelectChangeEvent) => {
    const value = e.target.value;

    dispatch(selectLang(value));

    i18next.changeLanguage(value);
    document.body.dir = i18next.dir();
    theme.direction = i18next.dir();
  }, []);

  return (
    <StyledBox
      sx={{
        marginBlockEnd: "1em",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2em",
      }}
    >
      {/* title */}
      <Typography variant="h5" component="h1" color="gray">
        {t("title")}
      </Typography>

      {/* lang select */}
      <StyledBox>
        <Typography variant="h6" component="label" color="gray">
          {t("selectLang")}
        </Typography>
        <FormControl sx={{ marginInlineStart: 3 }}>
          <Select
            value={selectedLang}
            onChange={handleLangChange}
            displayEmpty
            inputProps={{ "aria-label": "select Language" }}
            data-testid="select-language"
          >
            {lang.map((el) => {
              return (
                <MenuItem value={el.value} key={el.value}>
                  {el.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </StyledBox>

      {/* category select */}
      <StyledBox>
        <Typography variant="h6" component="label" color="gray">
          {t("selectLabel")}
        </Typography>
        <FormControl sx={{ minWidth: 200, marginInlineStart: 3 }}>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            inputProps={{ "aria-label": "Select Category" }}
            data-testid="select-category"
          >
            {categories.map((el) => {
              return (
                <MenuItem value={el} key={el}>
                  {el}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </StyledBox>
    </StyledBox>
  );
}

export default ChartHeader;
