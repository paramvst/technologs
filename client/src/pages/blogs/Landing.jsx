import { Spinner, Stack } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import {
  Categories,
  NavbarItem as Navbar,
  SearchBar,
} from "../../components/technologs";
import { getCategories } from "../../services/cagtegoryService";
const LandingP = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const { data, status } = await getCategories();

    if (status === 200) {
      setCategories(data.Categories);
    }
  };
  return (
    <>
      <Navbar />
      <SearchBar />
      <Stack display={"flex"} justifyContent="center">
        {/* <Spinner /> */}
      </Stack>

      {!categories ? (
        <Stack justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Stack>
      ) : (
        <Stack margin={"2%"}>
          <div className="row" style={{ marginLeft: "7%", marginRight: "7%" }}>
            {categories.map((category, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <Categories
                    heading={category.name}
                    summary={category.summary}
                  />
                </div>
              );
            })}
          </div>
        </Stack>
      )}
    </>
  );
};

export default LandingP;
