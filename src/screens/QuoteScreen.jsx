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
    <Card maxW="40rem" align="center" margin="1rem">
      <CardHeader alignSelf="start">
        <Heading
          fontSize={["7rem", "10rem"]}
          mt={["-0.8rem", "-1rem"]}
          mb={["-6rem", "-9rem"]}
          color={bg.bgColor}
          transition="color 0.7s ease-in"
        >
          &#8223;
        </Heading>
      </CardHeader>
      <CardBody>
        <Text
          id="quote-text"
          fontSize={["lg", "2xl"]}
          padding={[undefined, "2rem"]}
        >
          {quote.text}
        </Text>
        <Text id="quote-author " align="right">
          &#8212; {quote.author}
        </Text>
      </CardBody>
      <Divider />
      <CardFooter py="0.4rem">
        <Button variant="outline" onClick={changeHandler}>
          Another one!
        </Button>
      </CardFooter>
    </Card>
  );
};
export default QuoteScreen;
