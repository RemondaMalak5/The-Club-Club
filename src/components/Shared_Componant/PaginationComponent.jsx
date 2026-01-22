import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
// import Stack from "@mui/material/Stack";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useLayoutEffect, useState } from "react";
import i18next from "i18next";
import { Stack } from "@mui/material";

const PaginationComponent = ({
  currentPage,
  setCurrentPage,
  totalPages,
  paginationRef,
}) => {
  const [locale, setLocale] = useState(i18next.language);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useLayoutEffect(() => {
    paginationRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentPage, paginationRef]);

  const isArabic = locale === 'ar';
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLocale(lng);
    };

    i18next.on("languageChanged", handleLanguageChange);

  }, []);
  return (
    <div
      className="flex justify-center mt-6 z-10  "
      dir={isArabic ? "rtl" : "ltr"}
    >
      {totalPages > 1 &&
        <Stack spacing={2}>
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                marginTop: "4px",
                "&:hover": {
                  backgroundColor: "#21857C",
                  color: "#fff",
                },
              },
              "& .MuiPaginationItem-previous, & .MuiPaginationItem-next": {
                color: "#21857C",
              },
              "& .Mui-selected": {
                backgroundColor: "#21857C !important",
                color: "#fff",
              },
            }}
            shape="rounded"
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                slots={{
                  previous: isArabic ? ArrowForwardIcon : ArrowBackIcon,
                  next: isArabic ? ArrowBackIcon : ArrowForwardIcon,
                }}
              />
            )}
          />
        </Stack>
      }
    </div>
  );
};

export default PaginationComponent;