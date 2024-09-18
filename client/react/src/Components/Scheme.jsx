import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  HStack,
  VStack,
  Select,
} from "@chakra-ui/react";
// import "./Place.css";


const Scheme = () => {
  const [data, setData] = useState([]);
  // const { value } = useContext(AppContext);
  const [selectedState, setSelectedState] = useState("")

  const fetchData = () => {
    axios
      .get("http://localhost:4000/schemes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); 
  const filteredData = selectedState
    ? data.filter((item) => item.state === selectedState)
    : data;

  return (
    <div>
      <Select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        placeholder="Select state"
        mb={4}
      >
        {[...new Set(data.map((item) => item.state))].map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Select>

      {filteredData.map((item) => (
        <Card
          key={item._id}
          className="card"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <HStack className="image-class">
            <Image className="image" src={item.img} alt="" />
          </HStack>
          <Stack className="cardbody">
            <Heading size="md">{item.name}</Heading>
            <Text py="2">type - {item.type}</Text>
            <Text py="2">state -{item.state}</Text>
            <Text py="2">schemeName- {item.schemeName}</Text>
            <Text py="2">description -{item.description}</Text>
            <Text className="blue">
              explore -{" "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.schemeName}
              </a>
            </Text>
          </Stack>
        </Card>
      ))}
    </div>
  );
};

export default Scheme;
