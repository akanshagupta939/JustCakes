import React, { useEffect, useState } from "react";

import { MenuList } from "../menuList";
import {
  tileData,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../menuList/tileData";
import styles from "./styles.module.scss";
/* src/App.js */
import { API, graphqlOperation } from "aws-amplify";
import { listCakes } from "../../graphql/queries";

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
  {
    title: "Bento Cakes",
    category: "Bento",
  },
];

export type ICakes = {
  title: String;
  price: String;
  category: String;
  description: String;
  celebration: String;
  sizeDescription: String;
};
export type ListCakesQuery = {
  listCakes: {
    items: ICakes[];
    nextToken: string;
  };
};

export const Menu = () => {
  const [expanded, setExpanded] = React.useState<string | false>("A");
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const cakeApi = (await API.graphql(graphqlOperation(listCakes))) as {
          data: ListCakesQuery;
        };
        todos = cakeApi.data.listCakes.items as any;
        setTodos(todos);
      } catch (err) {}
    }
    fetchTodos();
  }, []);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const filterTileData = (category: string) => {
    let response;
    if (todos.length > 0) {
      response = todos?.filter((x: any) => x?.category.includes(category));
    } else {
      response = tileData?.filter((x: any) => x?.category.includes(category));
    }

    return response;
  };

  return (
    <>
      {accordionData.map(({ title, category }) => (
        <div key={category} className={styles.menu_container}>
          <Accordion
            key={category}
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
                <h1>Hii</h1>
              )}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
};
