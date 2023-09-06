import quotesy from "quotesy";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useBgColor } from "../store";

const QuoteScreen = () => {
  const [quote, setQuote] = useState(quotesy.random());
  const [bg, setBg] = useBgColor();

  const changeHandler = () => {
    setQuote(quotesy.random());
    setBg.change();
  };

  return (
    <Card maxW="40em" align="center">
      <CardHeader alignSelf="start">
        <Heading
          fontSize="10rem"
          marginBottom="-7rem"
          color={bg.bgColor}
          transition="color 0.7s ease-in"
        >
          &#8223;
        </Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="2xl">{quote.text}</Text>
        <Text align="right">&#8212; {quote.author}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="outline" onClick={changeHandler}>
          Another one!
        </Button>
      </CardFooter>
    </Card>
  );
};
export default QuoteScreen;
