import React from "react";
import { MenuList } from "../menuList";
import tileData, {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../menuList/tileData";
import styles from "./styles.module.scss";

const accordionData = [
  {
    title: "Chocolate Cakes",
    category: "Chocolate",
  },
  {
    title: "Fruit Cakes",
    category: "Fruit",
  },
  {
    title: "Dry Cakes",
    category: "Dry",
  },
  {
    title: "Our Speciality",
    category: "Special",
  },
];
const filterTileData = (category: string) => {
  const xx = tileData.filter((x) => x.category.includes(category));
  return xx;
};

export const Menu = (category: Array<string>) => {
  const [expanded, setExpanded] = React.useState<string | false>("A");
  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {accordionData.map(({ title, category }) => (
        <div className={styles.menu_container}>
          <Accordion
            square
            expanded={expanded === title}
            onChange={handleChange(title)}
          >
            <AccordionSummary aria-controls={title} id={title}>
              <div className={styles.text_content}>{title}</div>
            </AccordionSummary>
            <AccordionDetails>
              {category ? (
                <MenuList passedTileData={filterTileData(category)} />
              ) : (
                // <MenuList passedTileData={a} />
                <h1>Hii</h1>
              )}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
};
