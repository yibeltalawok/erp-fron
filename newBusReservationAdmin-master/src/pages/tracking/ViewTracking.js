import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import Layout from "../../pages/layout/Layout";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";

const ViewTracking = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBuAfQmrYyXSl_kZXhmWq54sFZrCIDKXgo",
    libraries: ["places"],
  });
  const [center, setCenter] = useState({
    lat: 11.585140284723675,
    lng: 37.37301319414389,
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [Msg, setMsg] = useState(null);
  const start = useRef();
  const destiantion = useRef();

  async function calculateRoute() {
    if (start.current.value === "" || destiantion.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: start.current?.value,
      destination: destiantion.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    start.current.value = "";
    destiantion.current.value = "";
  }

  useEffect(() => {
    (async () => {
      setMsg("Loading GPS...");
      if (navigator.geolocation) {
        let data = await navigator.geolocation.getCurrentPosition(
          async (postion) => {
            setTimeout(() => {
              setCenter({
                lat: postion.coords.latitude,
                lng: postion.coords.longitude,
                zoom: 18,
              });
              setMsg("");
            }, 1000);

            return {
              lat: postion.coords.latitude,
              lng: postion.coords.longitude,
            };
          }
        );
      } else alert("Please Allow your Location !");
    })();
  }, []);
  return (
    <Layout>
      <div className="mt-24">
        <Flex
          position="relative"
          flexDirection="column"
          alignItems="center"
          h="100vh"
          w="100vw"
        >
          {isLoaded ? (
            <Box position="absolute" left={0} top={0} h="100%" w="100%">
              <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onLoad={(map) => setMap(map)}
              >
                <Marker position={center} />
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
            </Box>
          ) : (
            <div>loading...</div>
          )}
          <Box
            p={4}
            borderRadius="lg"
            mt={4}
            bgColor="white"
            shadow="base"
            minW="container.md"
            zIndex="1"
          >
            <HStack spacing={2} justifyContent="space-between">
              <Box flexGrow={1}>
                {/* <Autocomplete> */}
                <Input
                  type="text"
                  placeholder="From"
                  ref={start}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                />
                {/* </Autocomplete> */}
              </Box>
              <Box flexGrow={1}>
                {/* <Autocomplete> */}
                <Input
                  type="text"
                  placeholder="To"
                  ref={destiantion}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                />
                {/* </Autocomplete> */}
              </Box>

              <ButtonGroup>
                <Button
                  colorScheme="pink"
                  type="submit"
                  onClick={calculateRoute}
                >
                  Find Route
                </Button>
                <IconButton
                  aria-label="center back"
                  icon={<FaTimes />}
                  onClick={clearRoute}
                />
              </ButtonGroup>
            </HStack>
            <HStack spacing={4} mt={4} justifyContent="space-between">
              <Text>Distance: {distance} </Text>
              <Text>Duration: {duration} </Text>
              <IconButton
                aria-label="center back"
                icon={<FaLocationArrow />}
                isRound
                onClick={() => {
                  map.panTo(center);
                  map.setZoom(15);
                }}
              />
            </HStack>
          </Box>
        </Flex>
      </div>
    </Layout>
  );
};

export default ViewTracking;
